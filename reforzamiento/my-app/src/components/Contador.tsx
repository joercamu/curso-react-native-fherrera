// UseState
import { useState } from "react";

export const Contador = () => {
  const [cont, setcont] = useState(0);

  const acomular = (numberAdd: number) => {
    setcont(cont + numberAdd);
  };
  return (
    <>
      <h1>
        Contador <small>{cont}</small>
      </h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          acomular(1);
        }}
      >
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acomular(-1)}>
        -1
      </button>
    </>
  );
};
