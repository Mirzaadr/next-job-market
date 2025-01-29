import Link from "next/link";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full grid md:grid-cols-[60px_1fr] lg:grid-cols-[260px_1fr]">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
