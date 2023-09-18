"use client";

import Stats from "@/components/Stats";
import Upload from "@/components/Upload";
import { MatchStats } from "@/types";
import { useState } from "react";

export default function Home() {
  const [matchStats, setMatchStats] = useState<MatchStats | undefined>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Upload setMatchStats={setMatchStats} />
      <Stats matchStats={matchStats} />
    </main>
  );
}
