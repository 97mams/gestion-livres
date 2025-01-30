import { PropsWithChildren } from "react";

export function Table(props: PropsWithChildren) {
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right  text-foreground border border-border">
        {props.children}
      </table>
    </div>
  )
}

export function TableHeader(props: PropsWithChildren) {
  return (
    <thead className="text-xs bg-gray-700 text-foreground">
      <tr>
        {props.children}
      </tr>
    </thead>
  )
}

export function TableTh(props: PropsWithChildren) {
  return (
    <th scope="col" className="px-6 py-3">
      {props.children}
    </th>
  )
}

export function TableBody(props: PropsWithChildren) {
  return (
    <tbody>
      {props.children}
    </tbody>
  )
}

export function TableTd(props: PropsWithChildren) {
  return (
    <td scope="col" className="px-6 py-4">
      {props.children}
    </td>
  )
}

export function TableTr(props: PropsWithChildren) {
  return (
    <tr className="bg-background">
      {props.children}
    </tr>
  )
}
