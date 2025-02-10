"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../customFiledFrom/CustomInput";
import { Button } from "../ui/button";
import { signupAction } from "@/app/actions";
import { useRouter } from "@/i18n/routing";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

function SignupForm() {
  const t = useTranslations("signupForm");
  const methods = useForm();
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("mobile", data.mobile);
    formData.append("address", data.address);

    const result = await signupAction(formData);
    if (result?.success) {
      router.push("/auth/login");
    }
    if (result?.error) {
      toast({
        title: t("errorTitle"),
        description: result.error,
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
          {/* Name Field */}
          <CustomInput
            label={t("nameLabel")}
            name="name"
            register={register}
            className="placeholder:text-black"
            errors={errors}
            validationRules={{
              required: t("nameRequired"),
              minLength: {
                value: 3,
                message: t("nameMinLength"),
              },
            }}
            placeholder={t("namePlaceholder")}
          />
          {/* Email Field */}
          <CustomInput
            label={t("emailLabel")}
            name="email"
            register={register}
            errors={errors}
            className="placeholder:text-black"
            validationRules={{
              required: t("emailRequired"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t("emailInvalid"),
              },
            }}
            placeholder={t("emailPlaceholder")}
          />
          {/* Password Field */}
          <CustomInput
            label={t("passwordLabel")}
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="placeholder:text-black"
            validationRules={{
              required: t("passwordRequired"),
              minLength: {
                value: 6,
                message: t("passwordMinLength"),
              },
            }}
            placeholder={t("passwordPlaceholder")}
          />
          {/* Mobile Field */}
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
          {/* Address Field */}
          <CustomInput
            label={t("addressLabel")}
            name="address"
            register={register}
            errors={errors}
            className="placeholder:text-black"
            validationRules={{
              required: t("addressRequired"),
              minLength: {
                value: 5,
                message: t("addressMinLength"),
              },
            }}
            placeholder={t("addressPlaceholder")}
          />
          {/* Submit Button */}
          <Button className="bg-bsMainPuple hover:bg-bsPurple text-white">
            {t("submit")}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default SignupForm;
