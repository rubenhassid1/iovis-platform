import { getMusicianById, musicians } from "@/data/musicians";
import { notFound } from "next/navigation";
import MusicianDetail from "@/components/MusicianDetail";

export function generateStaticParams() {
  return musicians.map((m) => ({ id: m.id }));
}

export default async function MusicianDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const musician = getMusicianById(id);

  if (!musician) {
    notFound();
  }

  return <MusicianDetail musician={musician} />;
}
