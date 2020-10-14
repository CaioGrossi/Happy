import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from "react-router-dom";
import L from "leaflet";

import mapMarkerImg from "../../images/MapMarker.svg";

import * as S from "./styles";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default function Orphanage() {
  const { goBack } = useHistory();

  return (
    <S.Wrapper>
      <S.SideBar>
        <img src={mapMarkerImg} alt="Happy" />

        <S.SideBarFooter>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </S.SideBarFooter>
      </S.SideBar>

      <S.Main>
        <S.OrphanageDetails>
          <img
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="Lar das meninas"
          />

          <S.Images>
            <button className="active" type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
          </S.Images>

          <S.OrphanageDetailsContent>
            <h1>Lar das meninas</h1>
            <p>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </p>

            <S.MapContainer>
              <Map
                center={[-27.2092052, -49.6401092]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[-27.2092052, -49.6401092]}
                />
              </Map>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </S.MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Venha como se sentir mais à vontade e traga muito amor para dar.
            </p>

            <S.OpenDetails>
              <div>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </div>
              <div>
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
            </S.OpenDetails>

            <S.ContactButton>
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </S.ContactButton>
          </S.OrphanageDetailsContent>
        </S.OrphanageDetails>
      </S.Main>
    </S.Wrapper>
  );
}
