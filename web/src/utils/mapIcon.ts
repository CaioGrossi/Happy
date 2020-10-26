import L from "leaflet";
import MapMarker from "../images/MapMarker.svg";

const mapIcon = L.icon({
    iconUrl: MapMarker,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60],
});

export default mapIcon;
  