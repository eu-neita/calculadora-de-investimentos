import { useState } from 'react'
import './App.css'

function App() {
  const [percentagePerMonth, setPercentagePerMonth ] = useState<string>('')
  const [valuePerMonth, setValuePerMonth ] = useState<string>('')
  const [timePerMonth, setTimePerMonth ] = useState<string>('')
  const [timePerYear, setTimePerYear ] = useState<string>('')

  return (
    <div>
      <h3>Calcule seus investimentos para o futuro :rocket:</h3>
      <div>
        <span>quanto o seu investimento vai render por mês?</span>
        <input 
        type='text' 
        placeholder='insira a %'
        ></input>
        <span>qual valor deseja colocar todo mês?</span>
        <input type='text' placeholder='insira o valor em reais'></input>
        <span>quanto tempo?(deve existir ao menos 1 campo preenchido para ser calculado)</span>
        <input type='text' placeholder='insira o valor em messes'></input>
        <input type='text' placeholder='insira o valor em anos'></input>
        <span>{resultado}</span>
      </div>
    </div>
  )
}

export default App
