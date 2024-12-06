import { Quest, QuestId } from './types';
import store from '../store';

export type SiteData = {
  quests: Quest[];
  isQuestsLoading: boolean;
  quest: QuestId | null;
  isQuestLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

