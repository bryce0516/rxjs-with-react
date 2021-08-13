import React, { useState, useEffect } from "react";
import { map, scan, startWith } from "rxjs/operators";
import useObservableWithAction from "../hook/useObservableWithAction";

const COUNT_START = 0;

const main$ = (action$) => {
  return action$.pipe(
    startWith(COUNT_START),
    scan((accumulator, action) => {
      return accumulator + action?.payload;
    })
  );
};

const status$ = (action$) => {
  return action$.pipe(
    map((action) => {
      const by = `by ${action?.payload}`;
      if (action.type === "INC") {
        return `Incremented ${by}`;
      }
      return `Decremented ${by}`;
    })
  );
};

const NewCounter = () => {
  const {
    action$,
    dispatch: countDispatch,
    state: countState,
  } = useObservableWithAction(main$);

  const { state: statusState } = useObservableWithAction(() =>
    status$(action$)
  );

  console.log("this is action$", action$);

  const handleDecrement = () => {
    countDispatch({
      payload: -1,
      type: "DEC",
    });
  };

  const handleIncrement = () => {
    countDispatch({
      payload: +1,
      type: "INC",
    });
  };

  return (
    <div>
      <button onClick={() => handleIncrement()}>+</button>
      <p>{countState}</p>
      <button onClick={() => handleDecrement()}>-</button>
    </div>
  );
};

export default NewCounter;
