import { createAsyncThunk } from '@reduxjs/toolkit';
import { BookingInfo, Quest, QuestId } from '../types/types';
import { AxiosError, AxiosInstance } from 'axios';
import { AppRoute, HttpCode } from '../const';
import type { History } from 'history';

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
      const { data } = await api.get<BookingInfo>(`/v1/escape-room/quest/${id}/booking`);
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
