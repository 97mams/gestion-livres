import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function GET() {
    try {
        const members = await prisma.user.findMany({ orderBy: { id: "desc" } })
        return NextResponse.json({
            members
        })
    } catch (error) {
        return NextResponse.error()
    }
}