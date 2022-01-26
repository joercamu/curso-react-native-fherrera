import { useForm } from "../hooks/useForm";

export const Formulario = () => {
  const { email, password, onChange, formulario } = useForm({
    email: "joercamu@gmail.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(ev) => onChange(ev.target.value, "email")}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={(ev) => onChange(ev.target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
