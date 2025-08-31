import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { Button } from "../ui/button";

export async function ListUser() {
  const title: string[] = ["Nom", "Prénoms", "Mail", "Tel", "Rôle", "Actions"];

  const users = await prisma.user.findMany({
    select: {
      name: true,
      lastName: true,
      email: true,
      tel: true,
      id: true,
      role: true,
    },
  });

  return (
    <div className="w-full">
      <Table>
        <TableCaption>Liste des utilisateurs.</TableCaption>
        <TableHeader>
          <TableRow>
            {title.map((item) => (
              <TableHead key={item} className="w-[100px]">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((users) => (
            <TableRow key={users.id}>
              <TableCell className="font-medium">{users.name}</TableCell>
              <TableCell>{users.lastName}</TableCell>
              <TableCell>{users.email}</TableCell>
              <TableCell>{users.tel}</TableCell>
              <TableCell>{users.role}</TableCell>
              <TableCell>
                <Button
                  variant={"ghost"}
                  className="text-red-200 hover:text-red-500"
                >
                  X
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
