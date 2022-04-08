import "./styles.css";

export default function App() {
  const mobiles = ["Android", "Blackbery", "iphone", "windows phone"];
  const manufac = ["samsung", "HTC", "micromax", "apple"];
  return (
    <div className="App">
      <h1> Mobile Operating System</h1>
      {mobiles.map((e) => {
        return (
          <ul>
            <li>{e}</li>
          </ul>
        );
      })}
      <div>
        <h1> Mobile Manufacturers</h1>
        {manufac.map((e) => {
          return (
            <ul>
              <li>{e}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
