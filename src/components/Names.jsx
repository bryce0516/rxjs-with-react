import React, { useState, useEffect } from "react";
import { of, interval } from "rxjs";
import { map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import useObservable from "../hook/useObservable";

const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
const getName = (user) => `${user.name.first} ${user.name.last}`;
const source = ["Adam", "Brian", "Christine"];
// const names$ = interval(1000).pipe(map((x) => source.slice(0, x + 1)));
const names$ = ajax
  .getJSON(api)
  .pipe(map(({ results: users }) => users.map(getName)));
const Names = () => {
  const names = useObservable(names$);

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
