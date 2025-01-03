import { Dayjs } from "dayjs";

export interface IInviteCard {
  gatheringId?: string;
  hostEmail?: string;
  hostName?: string;
  host?: IHost;
  name: string;
  image: string;
  location: string;
  dressCode: string;
  additionalInfo: string;
  intro: string;
  meetAt: any;
  participants?: IParticipants[];
}

export interface IHost {
  paritipantId?: string;
  name?: string;
  email?: string;
  imageUrl?: string;
  joinedAt?: string;
}

export interface IParticipants {
  participantId: string;
  email: string;
  imageUrl: string;
  joinedAt: string;
  name: string;
  status: string;
  isHost: boolean;
}
