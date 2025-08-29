import { SidebarAdmin } from "@/components/admin/sidebarAdmin";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex">
      <SidebarAdmin />
      <div>{children}</div>
    </div>
  );
}
