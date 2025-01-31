import Logo from "@/components/common/Logo";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sticky hidden h-screen overflow-auto border-r bg-muted/40 md:block md:p-2">
      <div className="flex w-full justify-center border-b py-2 lg:items-center lg:px-2">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Logo textClassName="hidden lg:block" />
          {/* <span className="hidden lg:block">SchooLama</span> */}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
