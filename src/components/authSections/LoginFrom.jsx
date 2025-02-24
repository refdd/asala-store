"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../customFiledFrom/CustomInput";
import { Button } from "../ui/button";
import { loginAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { signIn } from "next-auth/react";

function LoginForm() {
  const methods = useForm();
  const router = useRouter();
  const locale = useLocale();
  const { toast } = useToast();
  const t = useTranslations("loginForm"); // Fetch translations

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("mobile", data.mobile);
    formData.append("password", data.password);

    // Call the server action
    const result = await loginAction(formData);

    if (result.success) {
      // Redirect to the home page
      await signIn("credentials", {
        mobile: data.mobile,
        password: data.password,
        redirectTo: `/${locale}`,
      });
    } else if (result.error) {
      toast({
        title: t("errorTitle"),
        description: result.error || t("errorDescription"),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="pt-3">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5 md:gap-5"
        >
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
          <CustomInput
            label={t("passwordLabel")}
            name="password"
            type="password"
            register={register}
            className="placeholder:text-black"
            errors={errors}
            validationRules={{
              required: t("passwordRequired"),
              minLength: {
                value: 6,
                message: t("passwordMinLength"),
              },
            }}
            placeholder={t("passwordPlaceholder")}
          />
          <Button className="bg-bsMainPuple hover:bg-bsPurple text-white">
            {t("submitButton")}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default LoginForm;
