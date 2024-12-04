function FilterLevelItem(): JSX.Element {
  return (
    <li className="filter__item">
      <input type="radio" name="level" id="any" defaultChecked />
      <label className="filter__label" htmlFor="any">
        <span className="filter__label-text">Любой</span>
      </label>
    </li>
  );
}

export default FilterLevelItem;
