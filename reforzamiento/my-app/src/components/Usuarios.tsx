import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResResponse, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setusuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // Llamado API
    reqResApi
      .get<ReqResResponse>("/users")
      .then((res) => setusuarios(res.data.data))
      .catch(console.error);
  }, []);
  return (
    <>
      <h2>Usuarios</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};
