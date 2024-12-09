import QuestBookingCard from '../../components/quest-booking-card/quest-booking-card';
import Spinner from '../../components/spinner/spinner';
import { useAppSelector } from '../../hooks';
import { getIsMyBookingsLoading, getMyBookings } from '../../store/site-data/selectors';

function MyQuestsPage(): JSX.Element {
  const myBookings = useAppSelector(getMyBookings);
  const isMyBookingsLoading = useAppSelector(getIsMyBookingsLoading);
  if (isMyBookingsLoading) {
    return <Spinner />;
  }
  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width={1366}
            height={1959}
            alt=""
          />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">
            Мои бронирования
          </h1>
        </div>
        <div className="cards-grid">
          {
            myBookings.map((booking) => (
              <QuestBookingCard key={booking.id} {...booking} />
            ))
          }
        </div>
      </div>
    </main>

  );
}

export default MyQuestsPage;
