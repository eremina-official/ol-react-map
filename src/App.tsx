import Map from './Map';

function App() {
  return (
    <div className="main">
      <div className="content">
        <h1>Simple Map test</h1>
        <p>
          This is a simple responsive map built using <b>OpenLayers</b> and <b>React</b>. No API key
          required for this map.
        </p>
        <p>
          The map can be easily customized and integrated into your application. Whether you want to
          include a map into your webpage or just experiment with mapping tools, this guide provides
          a clean and practical starting point.
        </p>
        <p>
          The map includes essential features such as <b>zoom controls</b>, a custom
          <b>attribution</b>, and a <b>custom layer to display a specific location</b> on the map.
        </p>
        <p>
          The map is centered on London, UK, and includes a custom pin icon. You can change the
          coordinates and the icon to suit your needs.
        </p>
        <Map />
      </div>
    </div>
  );
}

export default App;
