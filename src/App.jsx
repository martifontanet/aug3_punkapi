import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Beers from "./components/Beers";
import { getBeers } from "./api";

function App() {
  const [beers, setBeers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getBeers()
        .then((data) => {
          setBeers(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 2000); // Delay de 2 segundos (2000 milisegundos)
  }, []);

  return (
    <main>
      <h1 className="page-title">PunkApi Beer List</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error" dangerouslySetInnerHTML={{ __html: error }} />
      ) : (
        <Beers beers={beers} />
      )}
    </main>
  );
}

export default App;