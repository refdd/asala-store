"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-dropdown-menu";

export function CustomDatePicker({ name, label, validationRules, ...rest }) {
  const { control, formState } = useFormContext();
  const { errors } = formState;

  return (
    <div className="grid w-full max-w-full items-center gap-3">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild className="!w-full">
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="!w-[90%] !min-w-full !max-w-full p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
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
