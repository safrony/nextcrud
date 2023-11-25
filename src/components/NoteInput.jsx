"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteInput = () => {
  const router = useRouter();
  const [note, setNote] = useState("");

  async function createNote() {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: note,
          user: "ade@safroni.my.id",
          additionalData: "",
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
  }

  return (
    <div className="p-4">
      <h3 className="text-center p-4">Fokus Hari ini</h3>
      <div className="flex justify-between">
        <input onChange={(e) => setNote(e.target.value)} />
        <button className="p-2 border-2" onClick={createNote}>
          Save
        </button>
      </div>
    </div>
  );
};
