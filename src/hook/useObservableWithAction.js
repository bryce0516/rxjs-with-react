import { useCallback, useState, useRef, useEffect } from "react";
import { Subject } from "rxjs";

const useObservableWithAction = (callback) => {
  const action$ = useRef(new Subject())?.current;

  const dispatch = useCallback((value) => action$.next(value), [action$]);

  const fn = useRef(callback)?.current;

  const [state, setState] = useState();

  useEffect(() => {
    const state$ = fn(action$);
    const subscription = state$.subscribe(setState);

    return () => subscription.unsubscribe();
  }, [fn, action$]);
  return { action$, dispatch, state };
};

export default useObservableWithAction;
