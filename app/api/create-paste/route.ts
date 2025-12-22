import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    console.log(request.body);
    const formData = await request.formData();
    const text = formData.get("text") as string;

    const paste = await prisma.pasteList.create({
        data: { text: text as string },
    });

    console.log("Created Paste", paste);
    redirect(`/paste/${paste.id}`);
}