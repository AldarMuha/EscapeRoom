import { createSlice } from '@reduxjs/toolkit';
import { SiteData } from '../../types/state';
import { StoreSlice } from '../../const';
import { deleteReservation, fetchBooking, fetchQuest, fetchQuests, fetchReservation, postBooking } from '../action';

const initialState: SiteData = {
  quests: [],
  isQuestsLoading: false,
  quest: null,
  isQuestLoading: false,
  booking: [],
  isBookingLoading: false,
  myBookings: [],
  isMyBookingsLoading: false,
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuest.pending, (state) => {
        state.isQuestLoading = true;
      })
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.isQuestLoading = false;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.isQuestLoading = false;
      })
      .addCase(fetchReservation.pending, (state) => {
        state.isMyBookingsLoading = true;
      })
      .addCase(fetchReservation.fulfilled, (state, action) => {
        state.myBookings = action.payload;
        state.isMyBookingsLoading = false;
      })
      .addCase(fetchReservation.rejected, (state) => {
        state.isMyBookingsLoading = false;
      })
      .addCase(fetchBooking.pending, (state) => {
        state.isBookingLoading = true;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.booking = action.payload;
        state.isBookingLoading = false;
      })
      .addCase(fetchBooking.rejected, (state) => {
        state.isBookingLoading = false;
      })
      .addCase(postBooking.fulfilled, (state, action) => {
        state.myBookings.push(action.payload);
      });
  },
});
