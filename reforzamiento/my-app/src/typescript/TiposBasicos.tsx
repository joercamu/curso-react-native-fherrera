export const TiposBasicos = () => {
  let nombre: string = "Jonathan";
  const edad = 29;
  const activo = true;
  const poderes: string[] = [];

  poderes.push("velocidad");
  poderes.push("volar");

  return (
    <>
      <h3>Tipos basicos</h3>
      <p>
        {nombre}, {edad}, {activo ? "activo" : "no activo"}
      </p>
      <p>{poderes.join(', ')}</p>
    </>
  );
};
