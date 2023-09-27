"use client";

import Stats from "@/components/Stats";
import Upload from "@/components/Upload";
import { HingeStats } from "@/types";
import { useState } from "react";

export default function Home() {
  const [hingeStats, setHingeStats] = useState<HingeStats | undefined>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Upload setHingeStats={setHingeStats} />
      <Stats hingeStats={hingeStats} />
    </main>
  );
}
