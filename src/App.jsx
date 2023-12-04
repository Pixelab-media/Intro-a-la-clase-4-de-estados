import './App.css'
import { useState } from 'react'

const App = () =>{

  const  [cuenta, setCuenta ] = useState(10)
  // let cuenta = 10

  const botonMas = () => {
    setCuenta(cuenta + 1)
  }
  // const mouseEnter = () => {
  //   console.log("paso el mouse")
  // }
  return (
    <div>
      <p>Contador: {cuenta}</p>
      <button onClick={botonMas}>+1</button>
      <button >-1</button>
    </div>
  )
}

export default App