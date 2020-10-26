import React from 'react';
import MapMarker from "../../images/MapMarker.svg";
import { FiArrowLeft } from "react-icons/fi";

import * as S from './styles';
import { useHistory } from 'react-router-dom';

const SiderBar = () => {

  const { goBack} = useHistory();
  return (
    <S.Wrapper>
      <img src={MapMarker} alt="Happy" />

      <S.Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </S.Footer>
    </S.Wrapper>
  );
}

export default SiderBar;