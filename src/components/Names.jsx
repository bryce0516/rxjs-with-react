import React, { useState, useEffect } from "react";
import { of, interval, Subject } from "rxjs";
import { map, scan, startWith, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { getUserNames } from "../functions";
import useObservable from "../hook/useObservable";

// const action$ = new Subject();
// const actionMap = {
//   forward: +1,
//   back: -1,
// };

// const page$ = action$.pipe(
//   scan((page, action) => page + actionMap[action], 1),
//   startWith(1)
// );

// const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
// const getName = (user) => `${user.name.first} ${user.name.last}`;
// const source = ["Adam", "Brian", "Christine"];
// const names$ = interval(1000).pipe(map((x) => source.slice(0, x + 1)));
// const names$ = ajax
//   .getJSON(api)
//   .pipe(map(({ results: users }) => users.map(getName)));

const Names = () => {
  // const names = useObservable(names$);
  const [names, dispatch] = useObservable(getUserNames);

  return (
    <div>
      <h1>RXJS with React</h1>
      <List items={names} />
      {/* <button onClick={() => action$.next("back")}>⇦</button>
      <button onClick={() => action$.next("forward")}>⇨</button> */}
      <button onClick={() => dispatch("back")}>⇦</button>
      <button onClick={() => dispatch("forward")}>⇨</button>
    </div>
  );
};

export default Names;

const List = ({ items = [], loading = false }) => (
  <ul className={loading ? "loading" : null}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
