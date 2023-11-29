import { useState } from 'react'

import Form from './components/form/Form'
import Resultado from './components/result/Resultado'
import styles from './App.module.css'


function App() {
  const [idade, setIdade] = useState(0)
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [clique, setClique] = useState(false)

  return (
    <>
    <div className={styles.container}>
      <div>
      <form onSubmit={(e) => e.preventDefault(setClique('true'))} >
        <h1>Digite as informações do paciente:</h1>
        <b>Idade:</b>
        <input onBlur={(e) => setIdade(e.target.value)} type="number" placeholder="Ex: 30" required min={0}/>
        <b>Altura:</b>
        <input onBlur={(e) => setAltura(e.target.value)} type="number" placeholder="Ex: 1.70" required min={0}/>
        <b>Peso:</b>
        <input onBlur={(e) => setPeso(e.target.value)} type="number" placeholder="Ex: 70" required min={0}/>
        <button type='submit'>Confirmar</button>
      </form>
      </div>
      <div>
      <Resultado idade={idade} peso={peso} altura={altura} clique ={clique}  ></Resultado>
      </div>
    </div>
    </>
  )
}

export default App
