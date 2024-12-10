import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import history from '../../history';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import LoginPage from '../../pages/login-page/login-page';
import QuestPage from '../../pages/quest-page/quest-page';
import PrivateRoute from '../private-route/private-route';
import BookingPage from '../../pages/booking-page/booking-page';
import NotFound from '../../pages/not-found/not-found';

function App(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={'quest/:id'}
          element={<QuestPage />}
        />
        <Route
          path={AppRoute.Contacts}
          element={<ContactsPage />}
        />
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateRoute>
              <MyQuestsPage />
            </PrivateRoute>
          }
        />
        <Route
          path={'/quest/:id/booking'}
          element={
            <PrivateRoute>
              <BookingPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route path="*"
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
