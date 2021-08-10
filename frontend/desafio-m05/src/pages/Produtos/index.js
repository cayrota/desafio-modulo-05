import React from "react";
import "./style.css";
import bannerImage from "../../assets/bg-pizzaria.png";
import profileImage from "../../assets/pizzaria.png";
import Ilustracao from "../../assets/illustration-2.svg";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Modal from "../../components/Modal";
import FormNovoProduto from "../../components/FormNovoProduto";

export default function Dashboard() {
  const { deslogar } = useAuth();
  const history = useHistory();
  const redirLogin = () => {
    history.push("/");
  };

  return (
    <div className="Dashboard">
      <div
        className="banner"
        style={{
          background: `linear-gradient(205.02deg, rgba(18, 18, 18, 0.2) 36.52%, rgba(18, 18, 18, 0.8) 77.14%), url(${bannerImage})`,
        }}
      >
        <img src={profileImage} alt="" className="profileImage" />
        <div className="cabecalho">
          <h1>Pizza Pizzaria & Delivery</h1>
          <button className="logout" onClick={() => deslogar(redirLogin)}>
            Logout
          </button>
        </div>
        <img src={Ilustracao} alt="" className="desenhoBanner" />
      </div>
      <div className="produtos">
        <p>
          Você ainda não tem nenhum produto no seu cardápio. Gostaria de
          adicionar um novo produto?
        </p>
        <Modal
          labelBotao="Adicionar produto ao cardápio"
          conteudo={<FormNovoProduto/>}
        />
      </div>
    </div>
  );
}
