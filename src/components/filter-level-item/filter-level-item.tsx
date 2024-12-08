import { Level } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setLevel } from '../../store/site-process/site-process';
import { translateLevel } from '../../utils';

type LevelType = {
  level: Level;
  isActiveLevel: boolean;
}

function FilterLevelItem({ level, isActiveLevel }: LevelType): JSX.Element {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(setLevel(level));
  };
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={level} defaultChecked={isActiveLevel} onClick={onClick} />
      <label className="filter__label" htmlFor={level}>
        <span className="filter__label-text">{translateLevel(level)}</span>
      </label>
    </li>
  );
}

export default FilterLevelItem;
