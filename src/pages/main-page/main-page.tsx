import FilterGenreItem from '../../components/filter-genre-item/filter-genre-item';
import FilterLevelItem from '../../components/filter-level-item/filter-level-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestCardList from '../../components/quest-card-list/quest-card-list';
import { Genre, Level } from '../../const';
import { useAppSelector } from '../../hooks';
import { getGenre, getLevel } from '../../store/site-process/selectors';

function MainPage(): JSX.Element {
  const activeGenre = useAppSelector(getGenre);
  const activeLevel = useAppSelector(getLevel);
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <fieldset className="filter__section">
                <legend className="visually-hidden">Тематика</legend>
                <ul className="filter__list">
                  {
                    Object.values(Genre).map((genreItem) => (
                      <FilterGenreItem key={genreItem} genre={genreItem} isActiveGenre={activeGenre === genreItem} />
                    ))
                  }
                </ul>
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <ul className="filter__list">
                  {
                    Object.values(Level).map((levelItem) => (
                      <FilterLevelItem key={levelItem} level={levelItem} isActiveLevel={activeLevel === levelItem} />
                    ))
                  }
                </ul>
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestCardList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
