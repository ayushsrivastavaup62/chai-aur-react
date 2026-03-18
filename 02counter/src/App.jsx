import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let count = 0

 const [counter, setCounter] = useState(count) 

  const addValue = () => {
     if(counter == 10){ count=0; return setCounter(0);}
    setCounter(counter + 1)
    console.log(counter)
  }

  const removeval = () => {
    if(counter == 0) return setCounter(0);
    setCounter(counter - 1)
    console.log(counter)
  }

  return (
    <div>
      <h1 style={{ color: 'blue' }}>chai aur react</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addValue}>add value from {counter}</button>
      <br />
      <button onClick={removeval}>remove value{counter}</button>
    </div>
  )
}

export default App
