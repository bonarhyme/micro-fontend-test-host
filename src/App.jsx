import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "nav/Header";

import { StoreProvider, useStore } from "store/store";

const App = () => {
  const { count, increment } = useStore();

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <Header count={count} onClear={increment} />
      <div>Count: {count}</div>
      <div>
        <button className="bg-blue-500 text-gray-100 p-2" onClick={increment}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
