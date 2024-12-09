import { Booking, BookingInfo, Quest, QuestId, User } from './types';
import store from '../store';
import { AuthorizationStatus, Genre, Level } from '../const';

export type SiteData = {
  quests: Quest[];
  isQuestsLoading: boolean;
  quest: QuestId | null;
  isQuestLoading: boolean;
  booking: BookingInfo[];
  isBookingLoading: boolean;
  myBookings: Booking[];
  isMyBookingsLoading: boolean;
}

export type SiteProcess = {
  genre: Genre;
  level: Level;
  bookingId: string;
}

export type UserProcess = {
  userStatus: AuthorizationStatus;
  isUserStatusLoading: boolean;
  user: User | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

