import { useState,useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
useEffect(() => {
  console.log("haciendo el fetch");
    fetch(`https://travel-tool.net/admin/xml/allseasons.xml`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cargar el archivo XML.");
        }
        console.log(response);
      })
     
      .catch((error) => {
        console.error("Error al obtener los paquetes:", error);
      });
  }, []); // Este useEffect solo se ejecuta una vez al montar el componente

  return (
    <>
      <div>
        <a rel="noopener" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a   rel="noopener"href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sitio de Paola</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
