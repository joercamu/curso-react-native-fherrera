import { useState } from "react";

export const useForm = <T extends Object>(formulario: T) => {
  const [state, setstate] = useState(formulario);

  const onChange = (value: string, field: keyof T) => {
    setstate({
      ...state,
      [field]: value,
    });
  };

  return { ...state, onChange, formulario:state };
};
