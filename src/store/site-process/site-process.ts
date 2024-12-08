import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre, Level, StoreSlice } from '../../const';
import { SiteProcess } from '../../types/state';

const initialState: SiteProcess = {
  genre: Genre.All,
  level: Level.Any,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<Genre>) => {
      state.genre = action.payload;
    },
    setLevel: (state, action: PayloadAction<Level>) => {
      state.level = action.payload;
    },
  },
});

export const { setGenre, setLevel } = siteProcess.actions;
