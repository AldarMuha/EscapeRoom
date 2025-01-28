import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <>
      <div>Not Found 404</div>
      <Link to={AppRoute.Root}>Назад на главную страницу</Link>
    </>
  );
}

export default NotFound;
