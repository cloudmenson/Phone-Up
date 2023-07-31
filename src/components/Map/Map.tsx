import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import * as Styles from "./styles";

const Map = () => {
  return (
    <Styles.StylizedContainer>
      <MapContainer
        zoom={11}
        scrollWheelZoom={true}
        center={[48.45991953947251, 34.981214592906994]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[48.407307771758134, 35.047947883429494]}>
          <Popup>Бульвар Слави, 46</Popup>
        </Marker>
        <Marker position={[48.439381282322, 35.05050028377589]}>
          <Popup>Проспект Гагаріна, 99</Popup>
        </Marker>
        <Marker position={[48.48036486043297, 34.90789663897781]}>
          <Popup>Штурманскький провулок, 7с</Popup>
        </Marker>
        <Marker position={[48.48374925590593, 34.923390410598394]}>
          <Popup>Юрія Кондратюка, 8, 1 поверх(Varus)</Popup>
        </Marker>
      </MapContainer>
    </Styles.StylizedContainer>
  );
};

export { Map };
