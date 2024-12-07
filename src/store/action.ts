import { createAsyncThunk } from '@reduxjs/toolkit';
import { Booking, BookingInfo, NewBooking, Quest, QuestId, User, UserAuth } from '../types/types';
import { AxiosError, AxiosInstance } from 'axios';
import { AppRoute, HttpCode } from '../const';
import type { History } from 'history';
import { Token } from '../services/token';

type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  FETCH_QUESTS: 'quests/fetch',
  FETCH_QUEST: 'quest/fetch',
  FETCH_BOOKING: 'booking/fetch',
  POST_BOOKING: 'booking/post',
  FETCH_RESERVATION: 'reservation/fetch',
  DELETE_RESERVATION: 'reservation/delete',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
};

export const fetchQuests = createAsyncThunk<Quest[], undefined, { extra: Extra }>(
  Action.FETCH_QUESTS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Quest[]>('quest');
    return data;
  }
);

export const fetchQuest = createAsyncThunk<QuestId, Quest['id'], { extra: Extra }>(
  Action.FETCH_QUEST,
  async (id, { extra }) => {
    const { api, history } = extra;
    try {
      const { data } = await api.get<QuestId>(`quest/${id}`);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }
      return Promise.reject(error);
    }
  }
);

export const fetchBooking = createAsyncThunk<BookingInfo, Quest['id'], { extra: Extra }>(
  Action.FETCH_BOOKING,
  async (id, { extra }) => {
    const { api, history } = extra;
    try {
      const { data } = await api.get<BookingInfo>(`quest/${id}/booking`);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }
      return Promise.reject(error);
    }
  }
);

export const postBooking = createAsyncThunk<Booking, NewBooking, { extra: Extra }>(
  Action.POST_BOOKING,
  async ({ id, date, time, contactPerson, phone, withChildren, peopleCount, placeId }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<Booking>(`quest/${id}/booking`, { date, time, contactPerson, phone, withChildren, peopleCount, placeId });
    return data;
  }
);

export const fetchReservation = createAsyncThunk<Booking[], undefined, { extra: Extra }>(
  Action.FETCH_RESERVATION,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Booking[]>('reservation');
    return data;
  }
);

export const deleteReservation = createAsyncThunk<void, Booking['id'], { extra: Extra }>(
  Action.DELETE_RESERVATION,
  async (id, { extra }) => {
    const { api } = extra;
    await api.delete(`reservation/${id}`);
  }
);

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    try {
      const { api } = extra;
      const { data } = await api.get<User>('login');
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NoAuth) {
        Token.drop();
      }
      return Promise.reject(error);
    }
  }
);

export const loginUser = createAsyncThunk<User, UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<User>('login', { email, password });
    const { token } = data;
    Token.save(token);
    history.push(AppRoute.Root);
    return data;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT_USER,
  async (_, { extra }) => {
    const { api } = extra;
    await api.delete('logout');
    Token.drop();
  }
);

