import Link from "next/link";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-full w-full md:grid-cols-[60px_1fr] lg:grid-cols-[240px_1fr]">
      <Sidebar />
      <main className="h-full flex-1 overflow-y-auto">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
