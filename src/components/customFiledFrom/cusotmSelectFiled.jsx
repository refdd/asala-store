import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

function CustomSelect({
  label,
  name,
  register,
  errors,
  validationRules,
  options,
  placeholder,
  ...rest
}) {
  return (
    <div className="grid w-full max-w-full items-center gap-3">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Select className="" {...register(name, validationRules)} {...rest}>
        <SelectTrigger className="w-full h-12">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errors && errors[name] && (
        <p className="text-sm font-medium text-destructive">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default CustomSelect;
