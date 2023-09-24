import "./styles.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const times = [
    "Programação",
    "Frontend",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão"
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={setNome}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={setCargo}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={setImagem}
        />
        <ListaSuspensa
          obrigatorio={true} 
          label="Time" 
          itens={times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
         />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
