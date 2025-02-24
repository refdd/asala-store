"use client";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../customFiledFrom/CustomInput";
import { Button } from "../ui/button";
import ChangeAvatar from "./ChangeAvatar";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

function FormChangeUserInfo({ userData }) {
  const { data: session, update } = useSession();
  const locale = useLocale();
  const { toast } = useToast();
  const [isUpdated, setIsUpdated] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isChangingPassword, setIsChangingPassword] = useState(false); // Track if user is changing password
  const t = useTranslations("formChangeUserInfo"); // Fetch translations
  const methods = useForm({
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || "",
      mobile: userData?.mobile || "",
      address: userData?.address || t("addressPlaceholder"),
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = methods;

  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name);
      setValue("email", session.user.email);
      setValue("mobile", session.user.mobile);
      setValue("address", session.user.address || t("addressPlaceholder"));
    }
  }, [session, setValue, t]);

  const newPassword = watch("newPassword");

  useEffect(() => {
    // If the user starts typing in the new password field, set isChangingPassword to true
    if (newPassword) {
      setIsChangingPassword(true);
    } else {
      setIsChangingPassword(false);
    }
  }, [newPassword]);

  const onSubmit = async (data) => {
    try {
      // Create a FormData object
      const formData = new FormData();

      // Append text fields to FormData
      formData.append("name", data.name);
      formData.append("mobile", data.mobile);
      formData.append("email", data.email);
      formData.append("address", data.address);

      // Append the selected file if it exists
      if (selectedFile) {
        formData.append("imageuser", selectedFile);
      }

      // Only include password fields if the user is changing the password
      if (isChangingPassword) {
        formData.append("oldpassword", data.currentPassword);
        formData.append("newpassword", data.newPassword);
        formData.append("confirmpassword", data.confirmNewPassword);
      }

      // Send the FormData as a multipart/form-data request
      const res = await axios
        .post(
          `https://asalafoods.perfect-teamwork.com/api/website/profile/updateProfile`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
              lang: locale,
              Authorization: `Bearer ${session?.user?.token}`,
            },
          }
        )
        .catch((err) => {
          console.log(err);
        });

      if (res.data.success) {
        await update({
          user: {
            ...session.user,
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            address: data.address,
            image: res.data.data.image_url,
          },
        });

        setIsUpdated(true);
        reset();
        toast({
          title: t("updateSuccess"),
          description: t("updateSuccessDescription"),
          type: "success",
        });
      }
    } catch (err) {
      console.log(err);

      toast({
        title: t("updateError"),
        description: err.response?.data?.message || t("updateErrorDescription"),
        type: "error",
      });
    }
  };

  return (
    <div className="">
      <h4 className="text-xl font-bold pb-7">{t("information")}</h4>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5"
        >
          <ChangeAvatar
            setSelectedFile={setSelectedFile}
            defaultImage={userData?.image}
          />
          {/* Name Field */}
          <CustomInput
            label={t("fullName")}
            name="name"
            register={register}
            errors={errors}
            validationRules={{
              required: t("fullNameRequired"),
              minLength: {
                value: 3,
                message: t("fullNameMinLength"),
              },
            }}
            placeholder={t("fullNamePlaceholder")}
          />
          {/* Email Field */}
          <CustomInput
            label={t("email")}
            name="email"
            register={register}
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
          {/* Mobile Field */}
          <CustomInput
            label={t("mobile")}
            name="mobile"
            register={register}
            errors={errors}
            validationRules={{
              required: t("mobileRequired"),
            }}
            placeholder={t("mobilePlaceholder")}
          />
          {/* Address Field */}
          <CustomInput
            label={t("address")}
            name="address"
            register={register}
            errors={errors}
            validationRules={{
              required: t("addressRequired"),
              minLength: {
                value: 5,
                message: t("addressMinLength"),
              },
            }}
            placeholder={t("addressPlaceholder")}
          />
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold">{t("changePassword")}</h3>
          </div>
          {/* Current Password Field */}
          <CustomInput
            label={t("currentPassword")}
            name="currentPassword"
            type="password"
            register={register}
            errors={errors}
            validationRules={{
              required: isChangingPassword
                ? t("currentPasswordRequired")
                : false,
            }}
            placeholder={t("currentPasswordPlaceholder")}
          />
          {/* New Password Field */}
          <CustomInput
            label={t("newPassword")}
            name="newPassword"
            type="password"
            register={register}
            errors={errors}
            validationRules={{
              required: isChangingPassword ? t("newPasswordRequired") : false,
              minLength: {
                value: 6,
                message: t("newPasswordMinLength"),
              },
            }}
            placeholder={t("newPasswordPlaceholder")}
          />
          {/* Confirm New Password Field */}
          <CustomInput
            label={t("confirmNewPassword")}
            name="confirmNewPassword"
            type="password"
            register={register}
            errors={errors}
            validationRules={{
              required: isChangingPassword
                ? t("confirmNewPasswordRequired")
                : false,
              validate: (value) =>
                !isChangingPassword ||
                value === newPassword ||
                t("passwordsMismatch"),
            }}
            placeholder={t("confirmNewPasswordPlaceholder")}
          />
          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button className="bg-bsMainPuple hover:bg-bsPurple text-white w-full">
              {t("updateInfo")}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FormChangeUserInfo;
