import { SidebarAdmin } from "@/components/admin/sidebarAdmin";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex bg-black">
      <SidebarAdmin />
      <div>{children}</div>
    </div>
  );
}
