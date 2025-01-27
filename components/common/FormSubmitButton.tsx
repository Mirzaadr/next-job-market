"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const FormSubmitButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      className={cn("", className)}
      type="submit"
      disabled={props.disabled || pending}
    >
      <span className="flex items-center justify-center gap-1">
        {pending && <Loader2 className="size-4 animate-spin" />}
        {props.children}
      </span>
    </Button>
  );
};

export default FormSubmitButton;
