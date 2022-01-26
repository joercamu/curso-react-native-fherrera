import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResResponse, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setusuarios] = useState<Usuario[]>([]);
  // const [pageRef, setpageRef] = useState(1);
  const pageRef = useRef(1); // guarda solamente la ref, no recarga todo el contenido

  useEffect(() => {
    // Llamado API
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const res = await reqResApi.get<ReqResResponse>("/users", {
      params: { page: pageRef.current },
    });

    if (res.data.data.length > 0) {
      setusuarios(res.data.data);
    } else {
      pageRef.current--;
      alert("no hay mas usuarios");
    }
  };

  const paginaSiguiente = () => {
    pageRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      cargarUsuarios();
    }
  };

  return { usuarios, paginaAnterior, paginaSiguiente};
};
