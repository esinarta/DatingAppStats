import { HingeEvent } from "@/types";

const parseMatchData = (events: HingeEvent[]) => {
  const seen = events.length;

  const matches = events.filter((item: HingeEvent) =>
    item.hasOwnProperty("match")
  );

  const yes = events.filter((item: HingeEvent) => item.hasOwnProperty("like"));

  const no = events.filter((item: HingeEvent) => item.hasOwnProperty("block"));

  return {
    seen,
    yes: yes.length,
    no: no.length,
    matches: matches.length,
  };
};

const parseChatData = (events: HingeEvent[]) => {
  const chats = events.filter((item: HingeEvent) =>
    item.hasOwnProperty("chats")
  );

  const longestChat = chats.reduce(
    (acc: number, curr: any) =>
      curr.chats.length > acc ? curr.chats.length : acc,
    0
  );

  const avgChatLength =
    chats.reduce((acc: number, curr: any) => acc + curr.chats.length, 0) /
    chats.length;

  return {
    chats: chats.length,
    longestChat,
    avgChatLength,
  };
};

export const parseHingeData = (events: HingeEvent[]) => {
  return {
    matchStats: parseMatchData(events),
    chatStats: parseChatData(events),
  };
};
