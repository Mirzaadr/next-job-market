"use client";

import { useFormStatus } from "react-dom";
import LoadingButton from "./LoadingButton";
import { cn } from "@/lib/utils";

const FormSubmitButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      {...props}
      className={cn("", className)}
      type="submit"
      loading={pending}
    />
  );
};

export default FormSubmitButton;
