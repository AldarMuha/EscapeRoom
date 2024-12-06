import { combineReducers } from '@reduxjs/toolkit';
import { StoreSlice } from '../const';
import { siteData } from './site-data/site-data';

export const rootReduser = combineReducers({
  [StoreSlice.SiteData]: siteData.reducer,
});
