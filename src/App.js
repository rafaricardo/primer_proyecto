import './App.css';
import Mensaje from "./Mensaje"

const Descripcion = () => {
  return <p>Esta es la App de mi primera prueba</p>
}

const App = () => {
  return (
    <div className='App'>
      <Mensaje color="red" title="Estamos trabajando" />
      <Mensaje color="blue" title="en mi primer" />
      <Mensaje color="green" title="curso de React"/>
      <Descripcion />
    </div>
  )
}

export default App;
