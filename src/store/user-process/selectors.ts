import { AuthorizationStatus, StoreSlice } from '../../const';
import { State } from '../../types/state';
import { User } from '../../types/types';

export const getUserStatus = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): AuthorizationStatus =>
  USER_PROCESS.userStatus;

export const getIsUserStatusLoading = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): boolean =>
  USER_PROCESS.isUserStatusLoading;

export const getUser = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): User | null =>
  USER_PROCESS.user;

