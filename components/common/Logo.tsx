import Image from 'next/image';
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});

interface LogoProps {
  containerClassName?: React.HTMLProps<HTMLDivElement>["className"];
  textClassName?: React.HTMLProps<HTMLParagraphElement>["className"];
}

const Logo = (props: LogoProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-x-2",
        props.containerClassName,
      )}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        height={30}
        width={30}
        className="dark:hidden"
      />
      <Image
        src="/logo.svg"
        alt="logo-dark"
        height={30}
        width={30}
        className="hidden dark:block"
      />

      <p
        className={cn(
          "text-xl font-semibold tracking-tight",
          font.className,
          props.textClassName,
        )}
      >
        FlowJobs
      </p>
    </div>
  );
};

export default Logo;