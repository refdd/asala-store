import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeOff } from "lucide-react"; // Import icons
import { useLocale } from "next-intl";

function CustomInput({
  label,
  name,
  register,
  errors,
  validationRules,
  type,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const locale = useLocale();
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="grid w-full max-w-full items-center gap-3">
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="relative">
        <Input
          id={name}
          className="h-12 pr-10"
          type={type === "password" && showPassword ? "text" : type}
          {...register(name, validationRules)}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`absolute ${locale == "ar" ? "left-3" : "right-3"}  top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary`}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {errors && errors[name] && (
        <p className="text-sm font-medium text-destructive">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default CustomInput;
