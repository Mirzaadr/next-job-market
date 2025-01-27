import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

const LoadingButton = ({ children, loading, ...props }: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={props.disabled || loading}>
      <span className="flex items-center justify-center gap-1">
        {loading && <Loader2 className="size-4 animate-spin" />}
        {children}
      </span>
    </Button>
  );
};

export default LoadingButton;
