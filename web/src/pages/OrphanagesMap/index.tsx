import React from "react";
import MapMarker from "../../images/MapMarker.svg";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import { Link } from "react-router-dom";

const mapIcon = Leaflet.icon({
  iconUrl: MapMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap = () => {
  return (
    <S.Wrapper>
      <S.SideBar>
        <S.Header>
          <img src={MapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </S.Header>

        <S.Footer>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </S.Footer>
      </S.SideBar>

      <Map
        center={[-19.8285255, -43.9913397]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker icon={mapIcon} position={[-19.8285255, -43.9913397]}>
          <S.PopUp closeButton={false} minWidth={240} maxWidth={240}>
            Lar dos homens
            <Link to="/orphanages/1">
              <FiArrowRight />
            </Link>
          </S.PopUp>
        </Marker>
      </Map>

      <S.CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </S.CreateOrphanage>
    </S.Wrapper>
  );
};

export default OrphanagesMap;
