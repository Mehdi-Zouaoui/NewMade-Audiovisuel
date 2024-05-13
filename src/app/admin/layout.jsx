import { Inter } from "next/font/google";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSideBar from "../../components/admin/AdminSideBar";

export default function AdminLayout({ children }) {
  return (
    <div className="w-full bg-blue h-screen border dark:bg-zinc-800  dark:border-stone-400">
      <div className="h-[10%] ">
        <AdminHeader />
      </div>
      <div className="w-full flex h-[90%]">
        <div className="w-1/6 h-full border dark:bg-zinc-800 dark:border-stone-400">
          <AdminSideBar />
        </div>
        <main className="w-5/6 h-full border dark:bg-zinc-800 dark:border-stone-400">
          {children}
        </main>
      </div>
    </div>
  );
}
