import { Dayjs } from "dayjs";

export interface IInviteCard {
  hostEmail?: string;
  hostName?: string;
  name: string;
  image: string;
  location: string;
  dressCode: string;
  additionalInfo: string;
  intro: string;
  meetAt: string | Dayjs;
}
