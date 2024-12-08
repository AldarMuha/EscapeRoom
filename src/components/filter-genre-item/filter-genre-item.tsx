import { Genre } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setGenre } from '../../store/site-process/site-process';
import { translateGenre } from '../../utils';

type GenreType = {
  genre: Genre;
  isActiveGenre: boolean;
}

function FilterGenreItem({ genre, isActiveGenre }: GenreType): JSX.Element {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(setGenre(genre));
  };
  return (
    <li className="filter__item">
      <input type="radio" name="type" id={genre} defaultChecked={isActiveGenre} onClick={onClick} />
      <label className="filter__label" htmlFor={genre}>
        <svg
          className="filter__icon"
          width={26}
          height={30}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-all-quests" />
        </svg>
        <span className="filter__label-text">{translateGenre(genre)}</span>
      </label>
    </li>
  );
}

export default FilterGenreItem;
