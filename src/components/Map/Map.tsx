import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import * as Styles from "./styles";

const Map = () => {
  return (
    <Styles.StylizedContainer>
      <MapContainer
        zoom={11}
        scrollWheelZoom={true}
        center={[49.55150214934827, 25.595036777361013]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[49.55150214934827, 25.595036777361013]}>
          <Popup>Наразі адреса відсутня. Телефонуйте за одним із номерів, які вказані вище.</Popup>
        </Marker>
      </MapContainer>
    </Styles.StylizedContainer>
  );
};

export { Map };
