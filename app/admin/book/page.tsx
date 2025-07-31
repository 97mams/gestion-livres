import { ListBook } from "@/components/admin/listBook";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/admin/users");

  return (
    <div className="w-full">
      <ListBook />
    </div>
  );
}
