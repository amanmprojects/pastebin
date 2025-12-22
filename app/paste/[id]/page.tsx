import { prisma } from "@/lib/prisma";
import PasteDisplay from "@/components/PasteDisplay";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return {
    title: `Paste #${id} | Pastebin`,
    description: `View paste contents for ID ${id}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  const paste = await prisma.pasteList.findUnique({
    where: { id: parseInt(id) },
  });

  if (!paste) {
    notFound();
  }

  return (
    <PasteDisplay id={id} text={paste.text} />
  );
}