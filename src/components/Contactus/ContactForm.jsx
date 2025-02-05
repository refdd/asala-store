"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../customFiledFrom/CustomInput";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useTranslations } from "next-intl";

function ContactForm() {
  const methods = useForm();
  const router = useRouter();
  const { toast } = useToast();
  const t = useTranslations("contactForm"); // Fetch translations

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = async (data) => {
    axios
      .post(
        `http://162.240.24.203/~primestore/api/website/contact-us`,
        {
          name: data.name,
          mobile: data.mobile,
          email: data.email,
          message: data.message,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        reset();
        toast({
          title: t("successTitle"),
          description: t("successDescription"),
          type: "success",
        });
      })
      .catch((err) => {
        toast({
          title: t("errorTitle"),
          description: t("errorDescription"),
          type: "error",
        });
        console.error("Error in sending contact form data:", err);
      });
  };

  return (
    <div className="md:col-span-3 border p-2 rounded-xl">
      <div className="text-xl font-bold">{t("title")}</div>
      <div className="body1 text-black mt-3">{t("subtitle")}</div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 p-3 mt-5"
        >
          <div className="">
            <CustomInput
              label={t("nameLabel")}
              name="name"
              register={register}
              errors={errors}
              className="placeholder:text-black"
              validationRules={{
                required: t("nameRequired"),
              }}
              placeholder={t("namePlaceholder")}
            />
          </div>
          <div className="">
            <CustomInput
              label={t("emailLabel")}
              name="email"
              type="email"
              register={register}
              className="placeholder:text-black"
              errors={errors}
              validationRules={{
                required: t("emailRequired"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: t("emailInvalid"),
                },
              }}
              placeholder={t("emailPlaceholder")}
            />
          </div>
          <div className="md:col-span-2">
            <CustomInput
              label={t("mobileLabel")}
              name="mobile"
              register={register}
              errors={errors}
              className="placeholder:text-black"
              validationRules={{
                required: t("mobileRequired"),
              }}
              placeholder={t("mobilePlaceholder")}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              {t("messageLabel")}
            </label>
            <textarea
              {...register("message", {
                required: t("messageRequired"),
              })}
              className="mt-1 block w-full bg-transparent rounded-md border shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-black"
              placeholder={t("messagePlaceholder")}
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button className="bg-bsMainPuple hover:bg-bsPurple text-white">
            {t("submitButton")}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default ContactForm;
