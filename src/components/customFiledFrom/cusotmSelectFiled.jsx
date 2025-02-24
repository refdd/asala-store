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
import { Controller, useFormContext } from "react-hook-form";

function CustomSelect({
  label,
  name,
  errors,
  validationRules,
  options,
  placeholder,
  valueKey = "value",
  labelKey = "label",
  ...rest
}) {
  const { control } = useFormContext();

  // Function to find the label for a given value
  const getLabelForValue = (value) => {
    const option = options.find(
      (opt) => opt[valueKey]?.toString() === value?.toString()
    );
    return option ? option[labelKey] : placeholder;
  };

  return (
    <div className="grid w-full max-w-full items-center gap-3">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value?.toString()}
            defaultValue={field.value?.toString()}
          >
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {options.map((option) => (
                  <SelectItem
                    key={option[valueKey]}
                    value={option[valueKey]?.toString()}
                  >
                    {option[labelKey]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {errors && errors[name] && (
        <p className="text-sm font-medium text-destructive">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default CustomSelect;
