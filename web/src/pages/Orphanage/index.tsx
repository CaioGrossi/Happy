import React, { useEffect, useState} from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import SideBar from '../../components/SideBar';
import api from "../../services/api";
import mapIcon from '../../utils/mapIcon';
import { useParams } from 'react-router-dom';

import * as S from "./styles";

export type Orphanage  = {
  latitude: number,
  longitude: number,
  name: string,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: boolean
  images: Array<{
    id: number;
    url: string;
  }>
}

type OrphanageParams = {
  id: string;
}

export default function Orphanage() {

  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveIndexImage] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
  
    })
  }, [params.id])

  if (!orphanage) {
    return <p>Carregando</p>
  }

  return (
    <S.Wrapper>
      <SideBar />
      <S.Main>
        <S.OrphanageDetails>
          <img
            src={orphanage?.images[activeImageIndex].url}
            alt={orphanage?.name}
          />

          <S.Images>
            {orphanage.images.map((image, index) => (
              <S.ImageButton 
                key={image.id} 
                className={activeImageIndex === index ? 'active' : ''}
                type="button" 
                onClick={() => {
                  setActiveIndexImage(index);
                }}
              >
                <img
                  src={image.url}
                  alt={orphanage.name}
                />
              </S.ImageButton>
            ))}
          </S.Images>

          <S.OrphanageDetailsContent>
            <h1>{orphanage?.name}</h1>
            <p>
              {orphanage?.about}
            </p>

            <S.MapContainer>
              <Map
                center={[orphanage?.latitude!, orphanage?.longitude!]}
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
                  icon={mapIcon}
                  position={[orphanage?.latitude!, orphanage?.longitude!]}
                />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer"href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}, ${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </S.MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              {orphanage?.instructions}
            </p>

            <S.OpenDetails>
              <div>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage?.opening_hours}
              </div>
              { orphanage?.open_on_weekends ? (
                <div>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div>
                  <FiInfo size={32} color="#FF6692" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
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
