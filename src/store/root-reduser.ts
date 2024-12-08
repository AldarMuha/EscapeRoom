import { combineReducers } from '@reduxjs/toolkit';
import { StoreSlice } from '../const';
import { siteData } from './site-data/site-data';
import { userProcess } from './user-process/user-process';
import { siteProcess } from './site-process/site-process';

export const rootReduser = combineReducers({
  [StoreSlice.SiteData]: siteData.reducer,
  [StoreSlice.SiteProcess]: siteProcess.reducer,
  [StoreSlice.UserProcess]: userProcess.reducer,
});
