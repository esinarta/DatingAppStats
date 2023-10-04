"use client";

import { HingeStats } from "@/types";

const Stats = ({ hingeStats }: { hingeStats: HingeStats | undefined }) => {
  if (!hingeStats) return null;

  return (
    <div>
      <div>
        {`You've seen a total of ${hingeStats.matchStats.seen} people on
        Hinge.`}
      </div>
      <br />
      <div>{`You've said "yes" to ${hingeStats.matchStats.yes} people and "no" to ${hingeStats.matchStats.no}.`}</div>
      <br />
      <div>{`You've had ${hingeStats.matchStats.matches} matches!`}</div>
      <div>{`Your first match was on ${hingeStats.matchStats.firstMatch.toString()}.`}</div>
      <br />
      <div>{`You've had ${hingeStats.chatStats.chats} chats with your matches.`}</div>
      <div>
        {`Your first was on ${hingeStats.chatStats.firstChat.toString()}.`}{" "}
      </div>
      <div>{`Your longest was ${hingeStats.chatStats.longestChat} messages.`}</div>
      <div>{`And your average chat length was ${Math.round(
        hingeStats.chatStats.avgChatLength
      )} messages.`}</div>
      <br />
      <div>
        {`You've said that you've met ${hingeStats.weMetStats.didMeet} of your matches.`}{" "}
      </div>
      <div>
        {`And that ${hingeStats.weMetStats.wasMyType} of them were your type.`}{" "}
      </div>
    </div>
  );
};

export default Stats;
