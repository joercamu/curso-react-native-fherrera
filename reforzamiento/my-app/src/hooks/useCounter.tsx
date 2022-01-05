import { useState } from "react";

export const useCounter = (inicial: number = 5) => {
  const [cont, setcont] = useState(inicial);

  const acomular = (numberAdd: number) => {
    setcont(cont + numberAdd);
  };

  return {
    cont,
    acomular,
  };
};
