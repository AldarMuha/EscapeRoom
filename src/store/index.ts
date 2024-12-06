import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { rootReduser } from './root-reduser';
import history from '../history';
import { fetchQuests } from './action';

const api = createApi();
const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          history,
        }
      }
    })
});

store.dispatch(fetchQuests());

export default store;
