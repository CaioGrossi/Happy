import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useHistory } from "react-router-dom";

import { FiArrowLeft, FiPlus } from "react-icons/fi";

import MapMarker from "../../images/MapMarker.svg";

import * as S from "./styles";

const happyMapIcon = L.icon({
  iconUrl: MapMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default function CreateOrphanage() {
  const { goBack } = useHistory();

  return (
    <S.Wrapper>
      <S.SideBar>
        <img src={MapMarker} alt="Happy" />

        <S.SideBarFooter>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </S.SideBarFooter>
      </S.SideBar>

      <S.Main>
        <S.FormCreate>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </S.FormCreate>
      </S.Main>
    </S.Wrapper>
  );
}
