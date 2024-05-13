"use client";
import AdminDashboard from "../../components/admin/AdminDashboard";
import AdminProductManagement from "../../components/admin/AdminProductManagement";
import AdminSystemManagement from "../../components/admin/AdminSystemManagement";
import { useAdminPage } from "../../store";
import { createClient } from "../../utils/supabase/client";
export default function Admin({ currentPage, setCurrentPage }) {
  const supabase = createClient();
  const currentAdminPage = useAdminPage((state) => state.adminPage);
  const handleAdminPage = (currentPage) => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div className="h-full">
            <AdminDashboard />
          </div>
        );
      case "products":
        return (
          <div className="h-full">
            <AdminProductManagement supabase={supabase} />
          </div>
        );
      case "system":
        return (
          <div className="h-full">
            <AdminSystemManagement />
          </div>
        );
    }
  };

  return <div className="h-full">{handleAdminPage(currentAdminPage)}</div>;
}
