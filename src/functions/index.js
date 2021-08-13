import { map, startWith, scan, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
const getName = (user) => `${user.name.first} ${user.name.last}`;

export const getUserNames = (action$) => {
  const actionMap = {
    forward: +1,
    back: -1,
  };

  const page$ = action$.pipe(
    scan((page, action) => page + actionMap[action], 1),
    startWith(1)
  );

  return page$.pipe(
    switchMap((page) => ajax.getJSON(`${api}&page=${page}`)),
    map(({ results }) => results.map(getName))
  );
};
