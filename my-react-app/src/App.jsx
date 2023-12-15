import { useState } from 'react'
import './App.css'
import Loader from './component/loader/loader'

function App() {
  const [loading, setLoading] = useState(true);
  //{loading && <Loader/>}
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
    <Loader texto="Cargando..."  color="azul"/>  
    <Loader texto="Loading..." color="verde"/> 
      {
        loading ?
          <Loader /> :
          <>
            <h1>Titulo</h1>
            <button className='btn btn-info'>Click!</button>
          </>
      }


    </>
  )
}

export default App


//if ternario condition ? true : false