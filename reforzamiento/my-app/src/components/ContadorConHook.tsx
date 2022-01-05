// Custom hook

import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { cont, acomular } = useCounter();// destructuracion
  
  return (
    <>
      <h1>
        Contador con hook <small>{cont}</small>
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
