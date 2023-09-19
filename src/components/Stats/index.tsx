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
      <div>Chats: {matchStats.chats}</div>
      <div>Longest chat: {matchStats.longestChat}</div>
      <div>Average chat length: {matchStats.avgChatLength}</div>
    </div>
  );
};

export default Stats;
