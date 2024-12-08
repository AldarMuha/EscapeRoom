import { Genre, Level, StoreSlice } from '../../const';
import type { Quest, QuestId } from '../../types/types';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';
import { getGenre, getLevel } from '../site-process/selectors';

export const getIsQuestsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isQuestsLoading;

export const getQuests = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Quest[] => SITE_DATA.quests;

export const getIsQuestLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isQuestLoading;

export const getQuest = ({ [StoreSlice.SiteData]: SITE_DATA }: State): QuestId | null => SITE_DATA.quest;

export const selectQuests = createSelector(
  [getQuests, getGenre, getLevel],
  (quests, genre, level) => {
    if (genre === Genre.All) {
      if (level === Level.Any) {
        return quests;
      } else {
        return quests.filter((quest) => quest.level === level);
      }
    } else {
      if (level === Level.Any) {
        return quests.filter((quest) => quest.type === genre);
      } else {
        return quests.filter((quest) => quest.type === genre).filter((quest) => quest.level === level);
      }
    }
  }
);
