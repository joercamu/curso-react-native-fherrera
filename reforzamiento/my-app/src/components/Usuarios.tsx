import { useUsuarios } from "../hooks/useUsuarios";

export const Usuarios = () => {
  const { usuarios, cargarUsuarios, crearUsuario } = useUsuarios();
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
        <tbody>{usuarios.map(crearUsuario)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguiente
      </button>
    </>
  );
};
