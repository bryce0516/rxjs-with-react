import React, { useState, useEffect } from "react";
import { of } from "rxjs";

const source = ["Adam", "Brian", "Christine"];
const names$ = of(source);

const Names = () => {
  const [names, setNames] = useState(source);

  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => {
      console.log("unmount works");
      subscription.unsubscribe();
    };
  }, []);
  return (
    <div>
      <h1>RXJS with React</h1>
      <List items={names} />
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
