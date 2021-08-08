import { useState, useEffect } from "react";
import axios from 'axios'
import Form from "./components/Form";

function App() {

  const [searchlyrics, saveSearchLyrics] = useState({})

  useEffect(() => {
    if( Object.keys(searchlyrics).length === 0) return;
    
    const consultApiLyrics = async() => {
      const {artista, cancion} = searchlyrics

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const respuesta = await axios.get(url)

      console.log(respuesta)
    }
    
    consultApiLyrics();

  }, [searchlyrics])

  return (
    <>
      <Form
        saveSearchLyrics={saveSearchLyrics}
      />
    </>
  );
}

export default App;
