"use client";

import { MatchStats } from "@/types";

const Stats = ({ matchStats }: { matchStats: MatchStats | undefined }) => {
  if (!matchStats) return null;

  return (
    <div>
      <div>Total: {matchStats.total}</div>
      <div>Yes: {matchStats.yes}</div>
      <div>No: {matchStats.no}</div>
      <div>Matches: {matchStats.matches}</div>
    </div>
  );
};

export default Stats;
