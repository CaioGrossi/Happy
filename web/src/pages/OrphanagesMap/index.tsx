import React, { useEffect, useState } from "react";
import MapMarker from "../../images/MapMarker.svg";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import mapIcon from '../../utils/mapIcon';

import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

type Orphanage = {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

const OrphanagesMap = () => {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

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
        center={[ -27.2104339,-49.629111]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map(orphanage => (
          <Marker key={orphanage.id} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]}>
            <S.PopUp closeButton={false} minWidth={240} maxWidth={240}>
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight />
              </Link>
            </S.PopUp>
          </Marker>
        ))}
      </Map>

      <S.CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </S.CreateOrphanage>
    </S.Wrapper>
  );
};

export default OrphanagesMap;
