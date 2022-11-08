import { idToGenre, idToGenreUa } from './idToGenre';

export function transformObj(arrObj) {
  arrObj.map(el => {
    el.genre_ids = idToGenre(el.genre_ids);
    el.release_date = el.release_date.slice(0, 4);
  });
  return arrObj;
  console.log(arrObj);
}

export function transformObjUa(arrObj) {
  arrObj.map(el => {
    el.genre_ids = idToGenreUa(el.genre_ids);
    el.release_date = el.release_date.slice(0, 4);
  });
  return arrObj;
  console.log(arrObj);
}