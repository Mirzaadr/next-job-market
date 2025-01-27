import Image from 'next/image';
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
})

const Logo = () => {
  return (
    <div className="hidden items-center justify-center gap-x-2 md:flex">
      <Image
        src="/logo.svg"
        alt="logo"
        height={30}
        width={70}
        className="dark:hidden"
      />
      <Image
        src="/logo.svg"
        alt="logo-dark"
        height={30}
        width={70}
        className="hidden dark:block"
      />

      {/* <p className={cn("font-semibold mt-2", font.className)}>Logo</p> */}
    </div>
  );
}

export default Logo;