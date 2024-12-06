import { StoreSlice } from '../../const';
import type { Quest, QuestId } from '../../types/types';
import { State } from '../../types/state';

export const getIsQuestsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isQuestsLoading;

export const getQuests = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Quest[] => SITE_DATA.quests;

export const getIsQuestLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isQuestLoading;

export const getQuest = ({ [StoreSlice.SiteData]: SITE_DATA }: State): QuestId | null => SITE_DATA.quest;
