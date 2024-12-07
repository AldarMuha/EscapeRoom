import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, StoreSlice } from '../../const';
import type { UserProcess } from '../../types/state';
import { fetchUserStatus, loginUser, logoutUser } from '../action';

const initialState: UserProcess = {
  userStatus: AuthorizationStatus.Unknown,
  isUserStatusLoading: false,
  user: null,
};

export const userProcess = createSlice({
  name: StoreSlice.UserProcess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.pending, (state) => {
        state.isUserStatusLoading = true;
      })
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userStatus = AuthorizationStatus.Auth;
        state.isUserStatusLoading = false;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.userStatus = AuthorizationStatus.NoAuth;
        state.isUserStatusLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userStatus = AuthorizationStatus.Auth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.userStatus = AuthorizationStatus.NoAuth;
      });
  }
});
