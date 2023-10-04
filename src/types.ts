export type HingeObj = {
  block?: HingeBlockEvent[];
  chats?: HingeChatEvent[];
  like?: HingeEvent[];
  match?: HingeEvent[];
  we_met?: HingeWeMetEvent[];
};

export interface HingeEvent {
  type: "block" | "chat" | "like" | "match" | "we_met";
  timestamp: string;
}

export interface HingeBlockEvent extends HingeEvent {
  type: "block";
  block_type: string;
}

export interface HingeChatEvent extends HingeEvent {
  type: "chat";
  body: string;
}

export interface HingeWeMetEvent extends HingeEvent {
  type: "we_met";
  did_meet_subject?: string;
  was_my_type?: boolean;
}

export type HingeStats = {
  matchStats: {
    seen: number;
    yes: number;
    no: number;
    matches: number;
    firstMatch: Date;
  };
  chatStats: {
    chats: number;
    firstChat: Date;
    longestChat: number;
    avgChatLength: number;
  };
  weMetStats: {
    didMeet: number;
    wasMyType: number;
  };
};
