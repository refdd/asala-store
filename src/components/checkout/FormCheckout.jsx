"use client";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import CustomInput from "../customFiledFrom/CustomInput";
import CustomSelect from "../customFiledFrom/cusotmSelectFiled";
import dynamic from "next/dynamic";
import { CustomDatePicker } from "../customFiledFrom/CustomDatePicker";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { executeCartItems } from "@/redux/cartSlice";
import { useRouter } from "@/i18n/routing";
import { format, parse } from "date-fns";
import { baseUrl } from "@/utils/featchApi";

const MapUserOrder = dynamic(() => import("../map/MapUserOrder"), {
  ssr: false,
});

function convertDateFormat(date) {
  if (!date) {
    throw new Error("Invalid date input");
  }

  if (date instanceof Date) {
    return format(date, "yyyy-MM-dd");
  }

  const parsedDate = parse(
    date,
    "EEE MMM dd yyyy HH:mm:ss 'GMT'XX (zzzz)",
    new Date()
  );
  return format(parsedDate, "yyyy-MM-dd");
}

function FormCheckout({ states }) {
  const t = useTranslations("checkoutForm");
  const [mapError, setMapError] = useState(false);
  const methods = useForm();
  const { data: session } = useSession();
  const [cities, setCities] = useState([]);
  const [district, setDistrict] = useState([]);
  const locale = useLocale();
  const dispatch = useDispatch();
  const router = useRouter();
  const [markerPosition, setMarkerPosition] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const onSubmit = (data) => {
    if (!markerPosition) {
      setMapError(true);
      return;
    } else {
      setMapError(false);
    }
    console.log("kdsl;jfl", markerPosition);
    axios
      .post(
        "https://asalafoods.perfect-teamwork.com/api/website/orders/create",
        {
          customer: {
            customer_name: data?.fullName,
            customer_mobile: data?.mobile,
            customer_mobile_whatsapp: data?.whatsapp,
            customer_address: data?.address,
            customer_link_maps: `https://www.google.com/maps?q=${markerPosition.lat},${markerPosition.lng}`,
            customer_maps_latitude: markerPosition.lat,
            customer_maps_longitude: markerPosition.lng,
            states_id: data?.state,
            city_id: data?.city,
            district_id: data?.district,
          },
          customer_preferred_delivery_date: convertDateFormat(
            data?.preferred_delivery_date
          ),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            lang: locale,
            Authorization: `Bearer ${session.user.token}`,
          },
        }
      )
      .then((response) => {
        dispatch(
          executeCartItems({ lang: locale, token: session?.user?.token })
        );
        router.push("/thankyou");
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };

  const state = watch("state");
  const city = watch("city");

  useEffect(() => {
    if (state) {
      axios.get(`${baseUrl}/general/getCitys?state_id=${state}`).then((res) => {
        if (res.data.success) {
          setCities(res.data.data);
        } else {
          setCities([]);
        }
      });
    }
  }, [state]);

  useEffect(() => {
    if (state && city) {
      axios
        .get(`${baseUrl}/general/getDistrict?state_id=${state}&city_id=${city}`)
        .then((res) => {
          if (res.data.success) {
            setDistrict(res.data.data);
          } else {
            setDistrict([]);
          }
        });
    }
  }, [state, city]);

  return (
    <div className="">
      <h4 className="text-2xl text-bsMainPuple font-semibold mb-10">
        {" "}
        {t("headerForm")}
      </h4>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5"
        >
          <div>
            <CustomInput
              label={t("fullName")}
              name="fullName"
              register={register}
              errors={errors}
              validationRules={{ required: t("fullNameRequired") }}
              placeholder={t("fullNamePlaceholder")}
            />
          </div>
          <div>
            <CustomInput
              label={t("phone")}
              name="phone"
              register={register}
              errors={errors}
              validationRules={{ required: t("phoneRequired") }}
              placeholder={t("phonePlaceholder")}
            />
          </div>
          <div>
            <CustomInput
              label={t("whatsapp")}
              name="whatsapp"
              register={register}
              errors={errors}
              validationRules={{ required: t("whatsappRequired") }}
              placeholder={t("whatsappPlaceholder")}
            />
          </div>
          <div>
            <CustomInput
              label={t("address")}
              name="address"
              register={register}
              errors={errors}
              validationRules={{ required: t("addressRequired") }}
              placeholder={t("addressPlaceholder")}
            />
          </div>
          <div className="md:col-span-1">
            <CustomSelect
              label={t("selectState")}
              name="state"
              options={states}
              valueKey="id"
              labelKey="name"
              placeholder={t("selectStatePlaceholder")}
              validationRules={{ required: t("selectStateRequired") }}
            />
          </div>
          <div className="md:col-span-1">
            <CustomSelect
              label={t("selectCity")}
              name="city"
              options={cities}
              valueKey="id"
              labelKey="name"
              placeholder={t("selectCityPlaceholder")}
              validationRules={{ required: t("selectCityRequired") }}
            />
          </div>
          <div className="md:col-span-1">
            <CustomSelect
              label={t("selectDistrict")}
              name="district"
              options={district}
              valueKey="id"
              labelKey="name"
              placeholder={t("selectDistrictPlaceholder")}
              validationRules={{ required: t("selectDistrictRequired") }}
            />
          </div>
          <div className="md:col-span-1">
            <CustomDatePicker
              name="preferred_delivery_date"
              label={t("preferredDeliveryDate")}
              validationRules={{
                required: t("preferredDeliveryDateRequired"),
              }}
            />
          </div>
          <MapUserOrder
            markerPosition={markerPosition}
            setMarkerPosition={setMarkerPosition}
            mapError={mapError}
          />
          {mapError && (
            <div className="col-span-2 text-red-500 text-sm">
              {t("mapMarkerRequired")}
            </div>
          )}
          <div className="col-span-2 flex items-center justify-center">
            <Button className="bg-bsMainPuple hover:bg-bsPurple text-white w-[200px] h-10">
              {t("submitButton")}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FormCheckout;
