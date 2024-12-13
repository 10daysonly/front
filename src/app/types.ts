import { Dayjs } from "dayjs";

export interface IInviteCard {
  hostEmail?: string;
  hostName?: string;
  // host?: IHost;
  name: string;
  image: string;
  location: string;
  dressCode: string;
  additionalInfo: string;
  intro: string;
  meetAt: string | Dayjs;
  participants?: IParticipants;
}

// export interface IHost {
//   name?: string;
//   email?: string;
//   paritipantId?: string;
//   imageUrl?: string;
// }

export interface IParticipants {
  participantId: string;
  email: string;
  joinedAt: string;
  isHost: boolean;
}
