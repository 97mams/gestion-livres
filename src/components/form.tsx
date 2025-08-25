"use client";
import { Input } from "@/src/components/input";
import { createBookAction } from "@/src/lib/book.action";
import { CreateUserAction, updateUserAction } from "@/src/lib/user.action";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "./SubmitButton";
import { toast } from "sonner";
import { CreateEmprunteAction } from "../lib/emprunte.action";

export function FormAction() {
  const { pending } = useFormStatus();
  const onSubmit = async (formData: FormData) => {
    await createBookAction({
      title: String(formData.get("title")),
      author: String(formData.get("author")),
      types: String(formData.get("types")),
      resume: String(formData.get("resume")),
      mockupImages: formData.get("upImage") as Blob,
      date_publish: String(formData.get("date")),
    });
  };

  return (
    <div>
      <form action={onSubmit}>
        <h1 className="text-accent font-bold text-3xl my-4">
          Ajouter un livre
        </h1>
        <div className="w-full grid grid-cols-2 gap-2 mb-4">
          <Input type="text" name="title" id="title" title="Titre" />
          <Input type="text" name="author" id="author" title="Auteur" />
          <Input type="type" name="types" id="type" title="Genre" />
          <Input type="type" name="resume" id="resume" title="Résumer" />
          <Input
            type="date"
            name="date"
            id="date-pub"
            title="Date de publication"
          />
          <Input type="file" name="upImage" id="upImage" title="Image" />
        </div>
        <SubmitButton text="ajouter" pending={pending} />
      </form>
    </div>
  );
}

type user = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  password: string;
  status: boolean;
};

export function UserForm({ data }: { data?: user | null }) {
  const { pending } = useFormStatus();

  const onSubmit = async (formData: FormData) => {
    if (data) {
      if (await updateUserAction(data.id, formData))
        toast.success(` ajout reussi`);
    } else {
      if (await CreateUserAction(formData)) toast.success(` ajout reussi`);
    }
  };

  return (
    <form className="w-full" action={onSubmit}>
      <Input
        dValue={data?.firstName}
        className="w-full"
        name="firstName"
        id="first-name"
        title="Nom"
        placeholder="votre nom"
      />
      <Input
        dValue={data?.lastName}
        className="w-full"
        name="lastName"
        id="last-name"
        title="Prénoms"
        placeholder="votre prenom"
      />
      <Input
        dValue={data?.email}
        className="w-full"
        name="mail"
        id="e-mail"
        title="E-mail"
        type="mail"
        placeholder="exemple@gmail.com"
      />
      <Input
        dValue={data?.tel}
        className="w-full"
        name="contact"
        id="contact"
        title="Téléphone"
        placeholder="numéro téléphone"
      />
      <Input
        dValue={data?.password}
        type="password"
        className="w-full"
        name="pwd"
        id="pwd"
        title="Mot de passe"
        placeholder="mot de passe"
      />
      <SubmitButton pending={pending} text={data ? "Modifier" : "Ajouter"} />
    </form>
  );
}

export const FormEmprunt = ({
  userEmail,
  bookId,
  onclick,
  onStatus,
}: {
  userEmail: string;
  bookId: number | undefined;
  onclick: () => void;
  onStatus: (bool: boolean) => void;
}) => {
  const { pending } = useFormStatus();

  const handleSubmit = async (formData: FormData) => {
    const date = formData.get("date");
    console.log(date);
    if (bookId) {
      CreateEmprunteAction(userEmail, bookId);
      toast.success("mety");
      onclick();
      onStatus(true);
    }
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-2 pb-4">
      <Input type="date" placeholder="limite d'emprunt" name="date" />
      <button
        className="text-sm border border-foreground text-foreground px-2 py-1 rounded-[5px] hover:bg-foreground/20"
        type="submit"
      >
        {pending ? "loading..." : "confirmer"}
      </button>
    </form>
  );
};
