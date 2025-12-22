import PasteCreateForm from "@/components/PasteCreateForm";

export const metadata = {
  title: "Instant Paste | Share snippets instantly",
  description: "A premium tool to share your code and text snippets with a single click.",
};

export default function Home() {
  return (
    <PasteCreateForm />
  );
}
