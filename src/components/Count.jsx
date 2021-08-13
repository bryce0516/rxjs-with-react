import React from "react";
import useObservable from "../hook/useObservable";
import { Subject } from "rxjs";
import { map, scan, startWith } from "rxjs/operators";

const action$ = new Subject();

const update$ = action$.pipe(
  map((action) => (action === "increment" ? +1 : -1))
);

const count$ = update$.pipe(
  startWith(0),
  scan((count, update) => count + update)
);

const Count = () => {
  const count = useObservable(count$);

  return (
    <div className="count-widget">
      <button onClick={() => action$.next("decrement")}>-</button>
      <span>{count}</span>
      <button onClick={() => action$.next("increment")}>+</button>
    </div>
  );
};

export default Count;
