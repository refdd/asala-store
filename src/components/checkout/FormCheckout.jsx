"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import CustomInput from "../customFiledFrom/CustomInput";
import CustomSelect from "../customFiledFrom/cusotmSelectFiled";
import dynamic from "next/dynamic";
import { CustomDatePicker } from "../customFiledFrom/CustomDatePicker";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useLocale } from "next-intl";
import axios from "axios";
import { executeCartItems } from "@/redux/cartSlice";
import { useRouter } from "@/i18n/routing";
import { format, parse } from "date-fns";
const MapUserOrder = dynamic(() => import("../map/MapUserOrder"), {
  ssr: false,
});
function convertDateFormat(date) {
  if (!date) {
    throw new Error("Invalid date input");
  }

  // If the input is already a Date object, format it directly
  if (date instanceof Date) {
    return format(date, "yyyy-MM-dd");
  }

  // If the input is a string, parse it first
  const parsedDate = parse(
    date,
    "EEE MMM dd yyyy HH:mm:ss 'GMT'XX (zzzz)",
    new Date()
  );
  return format(parsedDate, "yyyy-MM-dd");
}
function FormCheckout() {
  const methods = useForm();
  const { data: session } = useSession();
  const locale = useLocale();
  const dispatch = useDispatch();
  const router = useRouter();
  const [markerPosition, setMarkerPosition] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    axios
      .post(
        "https://perfect-teamwork.com/primesbackend/api/website/orders/create",
        {
          customer: {
            customer_name: data?.fullName,
            customer_mobile: data?.mobile,
            customer_mobile_whatsapp: data?.whatsapp,
            customer_address: data?.address,
            customer_link_maps:
              "https://www.google.com/maps?q=${markerPosition.lat},${markerPosition.lng}",
            customer_maps_latitude: markerPosition.lat,
            customer_maps_longitude: markerPosition.lng,
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

  return (
    <div className="mt-10">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5"
        >
          <div>
            <CustomInput
              label="Full Name"
              name="fullName"
              register={register}
              errors={errors}
              validationRules={{ required: "First Name is required" }}
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <CustomInput
              label="Phone Numbers"
              name="phone"
              register={register}
              errors={errors}
              validationRules={{ required: "Phone number is required" }}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <CustomInput
              label="whatsapp Numbers"
              name="whatsapp"
              register={register}
              errors={errors}
              validationRules={{ required: "whatsapp number is required" }}
              placeholder="Enter your whatsapp number"
            />
          </div>
          <div>
            <CustomInput
              label="address"
              name="address"
              register={register}
              errors={errors}
              validationRules={{ required: "address is required" }}
              placeholder="Enter your address"
            />
          </div>
          <div className="md:col-span-1">
            <CustomDatePicker
              name="preferred_delivery_date"
              label="preferred delivery date"
              validationRules={{
                required: "preferred delivery date is required",
              }}
            />
          </div>
          <MapUserOrder
            markerPosition={markerPosition}
            setMarkerPosition={setMarkerPosition}
          />
          <div className="col-span-2 flex items-center justify-center">
            <Button className="bg-bsMainBrown hover:bg-bsPurple text-white w-[200px] h-10">
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FormCheckout;
