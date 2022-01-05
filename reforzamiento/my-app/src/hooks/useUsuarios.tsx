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
      pageRef.current++;
    } else {
      alert("no hay mas usuarios");
    }
  };

  const crearUsuario = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  return { usuarios, cargarUsuarios , crearUsuario};
};
