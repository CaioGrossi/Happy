import React, { FormEvent, useState, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from 'leaflet';
import SideBar from '../../components/SideBar';
import { FiPlus } from "react-icons/fi";
import api from '../../services/api';
import mapIcon from '../../utils/mapIcon';

import * as S from "./styles";
import { useHistory } from "react-router-dom";

export type Orphanage  = {
  latitude: string,
  longitude: string,
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

export default function CreateOrphanage() {

  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedImage = Array.from(event.target.files);

    setImages(selectedImage);

    const selectedImagePreview = selectedImage.map(image =>
      URL.createObjectURL(image));

    setPreviewImages(selectedImagePreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    setTimeout(() => {
      history.push('/app');
    }, 3000);
  }

  return (
    <S.Wrapper>
      <SideBar />
      <S.Main>
        <S.FormCreate onSubmit={handleSubmit}>
          <S.Fieldset>
            <S.Legend>Dados</S.Legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {position.latitude !== 0
                && <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              }
            </Map>

            <S.InputBlock>
              <S.Label htmlFor="name">Nome</S.Label>
              <input 
                name="name"
                
                value={name}
                onChange={event => setName(event.target.value)} 
              />
            </S.InputBlock>

            <S.InputBlock>
              <S.Label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </S.Label>
              <textarea 
                name="about"
                 
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}   
              />
            </S.InputBlock>

            <S.InputBlock>
              <S.Label htmlFor="images">Fotos</S.Label>

              <S.ImagesContainer>

                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name}/>
                  )
                })}
                <S.Label htmlFor="images" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </S.Label>
              </S.ImagesContainer>

              <input 
                multiple 
                type="file" 
                id="images"
                name="images"
                
                onChange={handleSelectImages}
              />
            </S.InputBlock>
          </S.Fieldset>

          <S.Fieldset>
            <S.Legend>Visitação</S.Legend>

            <S.InputBlock>
              <S.Label htmlFor="instructions">Instruções</S.Label>
              <textarea 
                name="instructions"
                
                value={instructions}
                onChange={event => setInstructions(event.target.value)} 
              />
            </S.InputBlock>

            <S.InputBlock>
              <S.Label htmlFor="opening_hours">Horario de funcionamento</S.Label>
              <input 
                name="opening_hours"
                
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </S.InputBlock>

            <S.InputBlock>
              <S.Label htmlFor="open_on_weekends">Atende fim de semana</S.Label>

              <S.SelectButton>
                <button 
                  type="button" 
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button 
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </S.SelectButton>
            </S.InputBlock>
          </S.Fieldset>

          <S.SubmitButton type="submit">
            Confirmar
          </S.SubmitButton>
        </S.FormCreate>
      </S.Main>
    </S.Wrapper>
  );
}
