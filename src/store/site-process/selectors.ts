import { Genre, Level, StoreSlice } from '../../const';
import { State } from '../../types/state';

export const getGenre = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): Genre => SITE_PROCESS.genre;

export const getLevel = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): Level => SITE_PROCESS.level;

export const getBookingId = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): string => SITE_PROCESS.bookingId;
