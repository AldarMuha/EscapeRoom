import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getIsUserStatusLoading, getUserStatus } from '../../store/user-process/selectors';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getUserStatus);
  const isUserStatusLoading = useAppSelector(getIsUserStatusLoading);
  if (isUserStatusLoading) {
    return <Spinner />;
  }
  return (
    (authorizationStatus === AuthorizationStatus.Auth)
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
