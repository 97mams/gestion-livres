import { AppSidebar } from "@/components/app-sidebar";
import { LogOut } from "@/components/logout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
