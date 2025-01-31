import Logo from "@/components/common/Logo";
import Link from "next/link";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="sticky hidden h-dvh overflow-auto border-r bg-muted/40 md:flex md:flex-col md:p-2 lg:p-4">
      <div className="flex w-full justify-center border-b py-2 lg:items-center lg:px-2">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Logo textClassName="hidden lg:block" />
          {/* <span className="hidden lg:block">SchooLama</span> */}
        </Link>
      </div>
      <Menu />
    </div>
  );
};

export default Sidebar;
