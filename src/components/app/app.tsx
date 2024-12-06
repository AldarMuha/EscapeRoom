import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import history from '../../history';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import LoginPage from '../../pages/login-page/login-page';

function App(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Contacts}
          element={<ContactsPage />}
        />
        <Route
          path={AppRoute.MyQuests}
          element={<MyQuestsPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
