import { ListUser } from "@/components/admin/listUser";

export default function Page() {
  return (
    <div className="w-full p-8">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Liste Utilisateurs
      </h3>
      <ListUser />
    </div>
  );
}
