"use client";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";

function SubscribeNow() {
  const methods = useForm();
  const { toast } = useToast();
  const locale = useLocale();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;
  const t = useTranslations("subscribeNow");
  const onSubmit = (data) => {
    axios
      .post(
        `http://162.240.24.203/~primestore/api/website/subscribes`,
        {
          email: data.email,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        reset();
        toast({
          title: t("successTitle"),
          description: t("successMessage"),
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: t("errorTitle"),
          description: t("errorMessage"),
          type: "error",
        });
      });
  };

  return (
    <div className="container mx-auto px-4 md:w-[50%] md:py-4">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex items-center justify-between flex-col gap-2 md:gap-0 ${
            locale == "ar" ? "md:flex-row" : "md:flex-row"
          }  `}
        >
          <div
            className={`${
              locale == "ar" ? "md:pr-12 md:-ml-10 " : " md:pl-12 md:-mr-5"
            } w-full h-[50px]`}
          >
            <input
              {...register("email", { required: t("emailRequired") })}
              placeholder={t("emailPlaceholder")}
              type="email" // Use type="email" for better validation
              className={` ${
                locale == "ar" ? "pr-5 " : " pl-5 "
              }  h-[50px]  w-full rounded-[15px] bg-[#e4a4fb7a]  z-10 text-bsMainPuple placeholder:text-bsMainPuple placeholder:text-sm placeholder:font-semibold focus:outline-none focus:border-blue-500`}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <Button
            type="submit"
            className="text-white bg-[#E4A4FB] hover:bg-bsMainPuple rounded-[15px] shadow-none font-bold relative z-20 h-[50px]"
          >
            {t("subscribeButton")}{" "}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default SubscribeNow;
