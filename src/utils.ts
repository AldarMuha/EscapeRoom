import { Genre, Level } from './const';

const translateGenre = (genreItem: string) => {
  let genre = '';
  switch (genreItem) {
    case Genre.All:
      genre = 'Все квесты';
      break;
    case Genre.Adventures:
      genre = 'Приключения';
      break;
    case Genre.Horror:
      genre = 'Ужасы';
      break;
    case Genre.Mystic:
      genre = 'Мистика';
      break;
    case Genre.Detective:
      genre = 'Детектив';
      break;
    case Genre.SciFi:
      genre = 'Sci-fi';
      break;
    default:
      genre = genreItem;
      break;
  }
  return genre;
};

const translateLevel = (levelItem: string) => {
  let level = '';
  switch (levelItem) {
    case Level.Any:
      level = 'Любой';
      break;
    case Level.Easy:
      level = 'Легкий';
      break;
    case Level.Medium:
      level = 'Средний';
      break;
    case Level.Hard:
      level = 'Сложный';
      break;
    default:
      level = levelItem;
      break;
  }
  return level;
};

export { translateGenre, translateLevel };
