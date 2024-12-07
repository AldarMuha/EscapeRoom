import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getIsQuestLoading, getQuest } from '../../store/site-data/selectors';
import { useEffect } from 'react';
import { fetchQuest } from '../../store/action';
import Spinner from '../../components/spinner/spinner';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function QuestPage(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(getQuest);
  const isQuestLoading = useAppSelector(getIsQuestLoading);
  useEffect(() => {
    const { id } = params;
    if (id) {
      dispatch(fetchQuest(id));
    }
  }, [params, dispatch]);
  if (!quest) {
    return null;
  }
  if (isQuestLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={quest.previewImgWebp}
            />
            <img
              src={quest.previewImg}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {quest.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{quest.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {quest.peopleMinMax[0]}-{quest.peopleMinMax[1]} чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {quest.level}
              </li>
            </ul>
            <p className="quest-page__description">
              {quest.description}
            </p>
            <a
              className="btn btn--accent btn--cta quest-page__btn"
              href="booking.html"
            >
              Забронировать
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default QuestPage;
