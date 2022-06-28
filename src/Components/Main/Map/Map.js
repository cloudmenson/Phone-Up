import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

export const Map = () => {
  return (
    <MapContainer
      className="App__main-map-wrap"
      center={[48.45991953947251, 34.981214592906994]}
      zoom={10}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[48.407307771758134, 35.047947883429494]}>
        <Popup>Бульвар Слави, 46</Popup>
      </Marker>
      <Marker position={[48.439381282322, 35.05050028377589]}>
        <Popup>Проспект Гагаріна, 99</Popup>
      </Marker>
      <Marker position={[48.47893104444022, 34.92116795976464]}>
        <Popup>Велика Діївська, 40к</Popup>
      </Marker>
      <Marker position={[48.48036486043297, 34.90789663897781]}>
        <Popup>Штурманскький провулок, 7с</Popup>
      </Marker>
      <Marker position={[48.48374925590593, 34.923390410598394]}>
        <Popup>Юрія Кондратюка, 8, 1 поверх(Varus)</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
