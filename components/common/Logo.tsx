import Image from 'next/image';
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-x-2">
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

      <p className={cn("text-xl font-semibold tracking-tight", font.className)}>
        FlowJobs
      </p>
    </div>
  );
};

export default Logo;