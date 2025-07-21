import { useState } from "react";
import axios from "axios";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleCadastro(event) {
    event.preventDefault();

    try {
      const resposta = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          nome,
          email,
          senha,
        }
      );

      setNome("");
      setEmail("");
      setSenha("");
      setMensagem(
        `Usuario ${
          resposta.data.resposta?.nome || nome
        } cadastrado com sucesso!`
      );
    } catch (error) {
      setMensagem(error.response?.data?.message);
    }
  }

  return (
    <>
      <div className="h-screen flex flex-col items-center mt-[60px]">
        <h1 className="text-center text-2xl font-bold">Cadastro</h1>

        <form
          onSubmit={handleCadastro}
          className=" p-4 flex flex-col items-center gap-4 w-[20%] mx-auto   "
        >
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border rounded p-2 w-full"
            type="text"
            placeholder="Digite seu nome"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 w-full"
            type="email"
            placeholder="Digite seu email"
            required
          />
          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border rounded p-2 w-full"
            type="password"
            placeholder="Digite sua senha"
            required
          />

          <button
            className="bg-emerald-400 px-2 rounded cursor-pointer hover:bg-emerald-400/80 w-full"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
        {mensagem && <p className="text-center">{mensagem}</p>}
      </div>
    </>
  );
};

export default Cadastro;
