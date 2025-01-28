import { Metadata } from "next";
import AdminNavbar from "./AdminNavbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin",
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="">
      <AdminNavbar />
      {children}
    </div>
  );
};

export default AdminLayout;
