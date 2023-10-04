"use client";

import { HingeStats } from "@/types";

const Stats = ({ hingeStats }: { hingeStats: HingeStats | undefined }) => {
  if (!hingeStats) return null;

  return (
    <div>
      <div>Total: {hingeStats.matchStats.seen}</div>
      <div>Yes: {hingeStats.matchStats.yes}</div>
      <div>No: {hingeStats.matchStats.no}</div>
      <div>Matches: {hingeStats.matchStats.matches}</div>
      <div>First match: {hingeStats.matchStats.firstMatch.toString()}</div>
      <div>Chats: {hingeStats.chatStats.chats}</div>
      <div>First chat: {hingeStats.chatStats.firstChat.toString()}</div>
      <div>Longest chat: {hingeStats.chatStats.longestChat}</div>
      <div>Average chat length: {hingeStats.chatStats.avgChatLength}</div>
      <div>Meetings: {hingeStats.weMetStats.didMeet}</div>
      <div>My type: {hingeStats.weMetStats.wasMyType}</div>
    </div>
  );
};

export default Stats;
