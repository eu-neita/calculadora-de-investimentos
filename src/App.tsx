import { useState } from 'react'
import './App.css'
import 'bootstrap';

function App() {
  const [percentagePerMonth, setPercentagePerMonth ] = useState<string>('')
  const [valuePerMonth, setValuePerMonth ] = useState<string>('')
  const [timePerMonth, setTimePerMonth ] = useState<string>('')
  const [timePerYear, setTimePerYear ] = useState<string>('')

  const handlePercentagePerMonth = (percentagePerMonth: string): void => {
    setPercentagePerMonth(percentagePerMonth.replace(/%/g, ""));
  }

  const handleValuePerMonth = (valuePerMonth: string): void => {
    const value = valuePerMonth.replace(/\D/g, "")
    .replace(/(\d+)(\d{2})$/, "$1.$2")
    setValuePerMonth(`${value}`);
  }

  const handleTimePerMonth = (month: string): void => {
    const value = month.replace(/\D/g, "")
    setTimePerMonth(value);
  }

  const handleTimePerYear = (year: string): void => {
    const value = year.replace(/\D/g, "")
    setTimePerYear(value);
  }

  const calculate = () => {
    const percentage = parseFloat(percentagePerMonth);
    const _valuePerMonth = parseFloat(valuePerMonth);
    const _timePerMonth = timePerMonth === '' ? 0 : parseFloat(timePerMonth);
    const _timePerYear = timePerYear === '' ? 0 : parseFloat(timePerYear);

    const totalMonths = _timePerMonth + (_timePerYear * 12);
    let investmentValue = 0;
    for (let i = 0; i < totalMonths; i++) {
        investmentValue += _valuePerMonth;
        investmentValue *= 1 + percentage / 100;
    }

    return investmentValue.toFixed(2);
}


  return (
    <div id='entire-page'>
      <h3 id='header'>Calcule seus investimentos para o futuro 🚀</h3>
      <div className='investments-content'>
        <span>Quanto o seu investimento vai render por mês?</span>
        <input 
        type='text' 
        placeholder='insira a %'
        value={percentagePerMonth === '' ? '' : percentagePerMonth + "%"}
        onChange={(event) => handlePercentagePerMonth(event.target.value)}
        ></input>
        <span>Qual valor deseja colocar todo mês?</span>
        <input  
        type='text' 
        placeholder='insira o valor em reais'
        value={valuePerMonth === '' ? '' : "R$ " + valuePerMonth }
        onChange={(event) => handleValuePerMonth(event.target.value.replace('R$ ', "").replace('.', ""))}
        ></input>
        <span>Quanto tempo? (deve existir ao menos 1 campo preenchido para ser calculado)</span>
        <div>
          <span>Messes: </span>
        <input type='text' placeholder='insira o valor'
          value={timePerMonth}
          onChange={(event) => handleTimePerMonth(event.target.value)}
           ></input>
           </div>
           <span>e(ou)</span>
        <div>
          <span>Anos:   </span>
        <input type='text' placeholder='insira o valor'
          value={timePerYear}
          onChange={(event) => handleTimePerYear(event.target.value)}
          ></input>
          </div>
      <h3>{`ao final deste periodo você vai ter acomulado ${calculate()} reais`}</h3>
      </div>
    </div>
  )
}

export default App
