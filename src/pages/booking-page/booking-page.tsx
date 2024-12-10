import { ChangeEvent, FormEvent, useState } from 'react';
import BookingFormDate from '../../components/booking-form-date/booking-form-date';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getBooking, getIsBookingLoading, getQuest } from '../../store/site-data/selectors';
import { getBookingId } from '../../store/site-process/selectors';
import { NewBooking } from '../../types/types';
import { postBooking } from '../../store/action';

function BookingPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [withChildren, setWithChildren] = useState<boolean>(false);
  const [personCount, setPersonCount] = useState<number>(0);
  const onWithChildrenChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWithChildren(e.target.checked);
  };
  const onPersonCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonCount(Number(e.target.value));
  };
  const quest = useAppSelector(getQuest);
  const bookingInfo = useAppSelector(getBooking);
  const bookingId = useAppSelector(getBookingId);
  const isBookingLoading = useAppSelector(getIsBookingLoading);
  let activeBooking = bookingInfo.find((booking) => booking.id === bookingId);
  if (activeBooking === undefined) {
    activeBooking = bookingInfo[0];
  }
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (quest !== null && activeBooking !== undefined) {
      const data: NewBooking = {
        id: quest?.id,
        date: 'today',
        time: formData.get('date') as string,
        contactPerson: formData.get('name') as string,
        phone: formData.get('tel') as string,
        withChildren: withChildren,
        peopleCount: personCount,
        placeId: activeBooking.id,
      };
      dispatch(postBooking(data));
    }
  };
  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={quest?.previewImgWebp}
          />
          <img
            src={quest?.previewImg}
            width={1366}
            height={1959}
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">
            Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">
            {quest?.title}
          </p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              {(!isBookingLoading)
                ? <Map bookings={bookingInfo} />
                : <Spinner />}
            </div>
            <p className="booking-map__address">
              {activeBooking.location.address}
            </p>
          </div>
        </div>
        <form
          className="booking-form"
          onSubmit={onFormSubmit}
        >
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Выбор даты и времени</legend>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Сегодня</legend>
              <div className="booking-form__date-inner-wrapper">
                {
                  activeBooking.slots.today.map((booking) => (
                    <BookingFormDate key={booking.time} {...booking} />
                  ))
                }
              </div>
            </fieldset>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Завтра</legend>
              <div className="booking-form__date-inner-wrapper">
                {
                  activeBooking.slots.tomorrow.map((booking) => (
                    <BookingFormDate key={booking.time} {...booking} />
                  ))
                }
              </div>
            </fieldset>
          </fieldset>
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Контактная информация</legend>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="name">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Имя"
                required
                pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
              />
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="tel">
                Контактный телефон
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Телефон"
                required
                pattern="[0-9]{10,}"
              />
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="person">
                Количество участников
              </label>
              <input
                type="number"
                id="person"
                name="person"
                placeholder="Количество участников"
                required
                onChange={onPersonCountChange}
              />
            </div>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
              <input
                type="checkbox"
                id="children"
                name="children"
                onChange={onWithChildrenChange}
              />
              <span className="custom-checkbox__icon">
                <svg width={20} height={17} aria-hidden="true">
                  <use xlinkHref="#icon-tick" />
                </svg>
              </span>
              <span className="custom-checkbox__label">
                Со&nbsp;мной будут дети
              </span>
            </label>
          </fieldset>
          <button
            className="btn btn--accent btn--cta booking-form__submit"
            type="submit"
          >
            Забронировать
          </button>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
            <input
              type="checkbox"
              id="id-order-agreement"
              name="user-agreement"
              required
            />
            <span className="custom-checkbox__icon">
              <svg width={20} height={17} aria-hidden="true">
                <use xlinkHref="#icon-tick" />
              </svg>
            </span>
            <span className="custom-checkbox__label">
              Я&nbsp;согласен с
              <a className="link link--active-silver link--underlined" href="#">
                правилами обработки персональных данных
              </a>
              &nbsp;и пользовательским соглашением
            </span>
          </label>
        </form>
      </div>
    </main>
  );
}

export default BookingPage;
