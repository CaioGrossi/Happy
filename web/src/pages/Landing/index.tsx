import React from "react";

import { FiArrowRight } from "react-icons/fi";
import logoImg from "../../images/Logo.svg";

import * as S from "./styles";

const Landing = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <img src={logoImg} alt="Happy logo" />

        <S.Main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </S.Main>

        <S.Location>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </S.Location>

        <S.EnterAppLink to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </S.EnterAppLink>
      </S.Content>
    </S.Wrapper>
  );
};

export default Landing;
