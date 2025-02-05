"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../customFiledFrom/CustomInput";
import { Button } from "../ui/button";
import { signupAction } from "@/app/actions";
import { useRouter } from "@/i18n/routing";
import { useToast } from "@/hooks/use-toast";

function SignupForm() {
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
        title: "خطأ",
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
            label="الاسم الكامل"
            name="name"
            register={register}
            className="placeholder:text-black"
            errors={errors}
            validationRules={{
              required: "الاسم الكامل مطلوب",
              minLength: {
                value: 3,
                message: "يجب أن يكون الاسم على الأقل 3 أحرف",
              },
            }}
            placeholder="أدخل اسمك الكامل"
          />
          {/* Email Field */}
          <CustomInput
            label="البريد الإلكتروني"
            name="email"
            register={register}
            errors={errors}
            className="placeholder:text-black"
            validationRules={{
              required: "البريد الإلكتروني مطلوب",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "عنوان البريد الإلكتروني غير صحيح",
              },
            }}
            placeholder="أدخل بريدك الإلكتروني"
          />
          {/* Password Field */}
          <CustomInput
            label="كلمة المرور"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="placeholder:text-black"
            validationRules={{
              required: "كلمة المرور مطلوبة",
              minLength: {
                value: 6,
                message: "يجب أن تكون كلمة المرور على الأقل 6 أحرف",
              },
            }}
            placeholder="أدخل كلمة المرور"
          />
          {/* Mobile Field */}
          <CustomInput
            label="رقم الجوال"
            name="mobile"
            register={register}
            errors={errors}
            className="placeholder:text-black"
            validationRules={{
              required: "رقم الجوال مطلوب",
              // pattern: {
              //   value: /^[0-9]{12}$/,
              //   message: "رقم الجوال غير صحيح",
              // },
            }}
            placeholder="أدخل رقم الجوال"
          />
          {/* Address Field */}
          <CustomInput
            label="العنوان"
            name="address"
            register={register}
            errors={errors}
            className="placeholder:text-black"
            validationRules={{
              required: "العنوان مطلوب",
              minLength: {
                value: 5,
                message: "يجب أن يكون العنوان على الأقل 5 أحرف",
              },
            }}
            placeholder="أدخل عنوانك"
          />
          {/* Submit Button */}
          <Button className="bg-bsMainPuple hover:bg-bsPurple text-white">
            إرسال
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default SignupForm;
