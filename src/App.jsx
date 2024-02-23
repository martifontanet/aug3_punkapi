import { useRef, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Beers from "./components/Beers";
import { getBeers } from "./api";

function App() {
  const [beers, setBeers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  return (
    <main>
      <h1 className="page-title">Llistat de Cerveses</h1>
      {error && <div className="error">{error}</div>}
      {loading ? <Loader /> : <Beers beers={beers} />}
    </main>
  );
}

export default App;