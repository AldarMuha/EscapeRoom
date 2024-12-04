function FilterGenreItem(): JSX.Element {
  return (
    <li className="filter__item">
      <input type="radio" name="type" id="all" defaultChecked />
      <label className="filter__label" htmlFor="all">
        <svg
          className="filter__icon"
          width={26}
          height={30}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-all-quests" />
        </svg>
        <span className="filter__label-text">Все квесты</span>
      </label>
    </li>
  );
}

export default FilterGenreItem;
