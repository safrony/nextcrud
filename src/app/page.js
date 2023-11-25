import { NoteCard } from "@/components/NoteCard";
import { NoteInput } from "@/components/NoteInput";

async function getNotes() {
  const res = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='ade@safroni.my.id')",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { items } = await getNotes();

  return (
    <div className="w-xs bg-slate-200 m-4">
      <NoteInput />
      <h1 className="p-2">Todo :</h1>
      <div className="space-y-3">
        {items.map(({ id, content }) => {
          return <NoteCard key={id} id={id} content={content} />;
        })}
      </div>
    </div>
  );
}
