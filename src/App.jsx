
import { Viewer, GeoJsonDataSource, KmlDataSource } from "resium";

const data = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};

function App() {
  return (
    <Viewer full>
      <GeoJsonDataSource data={"your_geo_json.geojson"} />
      <KmlDataSource data={"your_geo_json.kml"} />
      <GeoJsonDataSource data={data} />
    </Viewer>
  );
}

export default App;