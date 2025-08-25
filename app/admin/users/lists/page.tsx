import { ListUser } from "@/components/admin/listUser";

export default function Page() {
  return (
    <div className="w-full p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Listes membres
      </h2>
      <ListUser />
    </div>
  );
}
