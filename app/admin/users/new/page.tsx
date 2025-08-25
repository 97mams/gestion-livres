import { UserForm } from "@/components/form";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Ajouter un membre
        </h3>
        <UserForm />
      </div>
    </div>
  );
}
