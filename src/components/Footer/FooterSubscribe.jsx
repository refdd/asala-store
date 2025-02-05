"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../ui/input"; // Assuming this is the shadcn/ui Input component
import { useTranslations } from "next-intl";

function FooterSubscribe() {
  const t = useTranslations("footerSubscribe");
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {};

  return (
    <div className="md:col-span-2 z-20">
      <h4 className="text-xl text-white font-bold mb-4">{t("title")}</h4>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-3 md:gap-5"
        >
          <div>
            <Input
              type="text"
              placeholder={t("fullNamePlaceholder")}
              className="placeholder:text-white py-6 rounded-2xl text-white"
              {...register("fullName", { required: t("fullNameRequired") })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="number"
              placeholder={t("phoneNumberPlaceholder")}
              className="placeholder:text-white py-6 rounded-2xl text-white"
              {...register("phoneNumber", {
                required: t("phoneNumberRequired"),
              })}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-bsMainPuple text-white border border-white rounded-2xl px-4 py-2"
            >
              {t("submitButton")}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FooterSubscribe;
