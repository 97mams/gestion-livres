import { AppSidebar } from "@/components/admin/app-sidebar";
import { LogOut } from "@/components/logout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { checkUserRole } from "../../server/user.server";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  const email = String(session?.user?.email);
  const role = await checkUserRole(email);

  if (role != "admin") {
    redirect("/");
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <div className="w-full flex justify-between pr-8 pt-2">
          <SidebarTrigger />
          <LogOut />
        </div>
        {children}
      </div>
    </SidebarProvider>
  );
}
