"use client";
import { createBookAction } from "@/lib/book.action";
import { CreateUserAction, updateUserAction } from "@/lib/user.action";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { CreateEmprunteAction } from "../lib/emprunte.action";
import { SubmitButton } from "./SubmitButton";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

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
          <Input type="text" name="title" id="title" placeholder="Titre" />
          <Input type="text" name="author" id="author" placeholder="Auteur" />
          <Input type="type" name="types" id="type" placeholder="Genre" />
          <Input type="type" name="resume" id="resume" placeholder="Résumer" />
          <Input
            type="date"
            name="date"
            id="date-pub"
            placeholder="Date de publication"
          />
          <Input type="file" name="upImage" id="upImage" placeholder="Image" />
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
      <Label htmlFor="first-name">Nom</Label>
      <Input
        defaultValue={data?.firstName}
        className="w-full"
        name="firstName"
        id="first-name"
        placeholder="votre nom"
      />
      <Label htmlFor="last-name">Prenom</Label>
      <Input
        defaultValue={data?.lastName}
        className="w-full"
        name="lastName"
        id="last-name"
        placeholder="votre prenom"
      />
      <Label htmlFor="e-mail">Email</Label>
      <Input
        defaultValue={data?.email}
        className="w-full"
        name="mail"
        id="e-mail"
        type="mail"
        placeholder="exemple@gmail.com"
      />
      <Label htmlFor="contact">Numéro de téléphone</Label>
      <Input
        defaultValue={data?.tel}
        className="w-full"
        name="contact"
        id="contact"
        placeholder="numéro téléphone"
      />
      <Label htmlFor="pwd">Mot de passe</Label>
      <Input
        defaultValue={data?.password}
        type="password"
        className="w-full"
        name="pwd"
        id="pwd"
        placeholder="mot de passe"
      />
      <SubmitButton
        classname="mt-4"
        pending={pending}
        text={data ? "Modifier" : "Ajouter"}
      />
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
      <Button variant={"default"} type="submit">
        {pending ? "loading..." : "confirmer"}
      </Button>
    </form>
  );
};
