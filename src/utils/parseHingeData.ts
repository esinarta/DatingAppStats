import { HingeObj, HingeWeMetEvent } from "@/types";

const parseMatchData = (items: HingeObj[]) => {
  const seen = items.length;

  const matches = items.filter((item: HingeObj) =>
    item.hasOwnProperty("match")
  );

  const yes = items.filter((item: HingeObj) => item.hasOwnProperty("like"));

  const no = items.filter((item: HingeObj) => item.hasOwnProperty("block"));

  return {
    seen,
    yes: yes.length,
    no: no.length,
    matches: matches.length,
  };
};

const parseChatData = (items: HingeObj[]) => {
  const chats = items.filter((item: HingeObj) => item.hasOwnProperty("chats"));

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

const parseWeMetData = (items: HingeObj[]) => {
  const meetings = items.filter((item: HingeObj) =>
    item.hasOwnProperty("we_met")
  );

  const weMetEvents = meetings.reduce(
    (acc: HingeWeMetEvent[], curr: HingeObj) => [
      ...acc,
      ...(curr.we_met?.map((event: HingeWeMetEvent) => ({
        ...event,
      })) ?? []),
    ],
    []
  );

  const didMeet = weMetEvents.filter(
    (event: HingeWeMetEvent) => event.did_meet_subject === "Yes"
  );

  const wasMyType = weMetEvents.filter(
    (event: HingeWeMetEvent) => event.was_my_type
  );

  return {
    didMeet: didMeet.length,
    wasMyType: wasMyType.length,
  };
};

export const parseHingeData = (items: HingeObj[]) => {
  return {
    matchStats: parseMatchData(items),
    chatStats: parseChatData(items),
    weMetStats: parseWeMetData(items),
  };
};
