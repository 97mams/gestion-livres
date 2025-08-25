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

export async function ListUser() {
  const title: string[] = ["Nom", "Prénoms", "Mail", "Tel", "Rôle"];

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
              <TableCell className="text-right">{users.tel}</TableCell>
              <TableCell className="text-right">{users.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
