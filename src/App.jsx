import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularImc = () => {
    const alturaEmMetros = altura / 100;
    const valorImc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);


  if (valorImc < 18.5) {
    setMensagem('Abaixo do peso');
  } else if (valorImc >= 18.5 && valorImc < 24.9) {
    setMensagem('Peso ideal');
  } else if (valorImc > 25 && valorImc < 29.9) {
    setMensagem('Sobrepeso');
  } else {
    setMensagem('Obesidade');
  }

  setImc(valorImc);
}

const mudancaDePeso = (e) => {
  setPeso(e.target.value);
}

const mudancaDeAltura = (e) => {
  setAltura(e.target.value);
}

return (
  <div className='App'>
    <h1 className='title'>Calculadora de IMC</h1>
        <label className='input-label'>
          Peso(kg):
          <input type="number" className='input-label--control' value={peso} onChange={mudancaDePeso} />
        </label>
        <label className='input-label'>
          Altura(cm):
          <input type="number" className='input-label--control' value={altura} onChange={mudancaDeAltura} />
        </label>
        <button onClick={calcularImc}>Calcular IMC</button>
    {imc && (
      <div className='resultadoImc'>
      <h2>Seu IMC é: {imc}</h2>
      <p>{mensagem}</p>
      </div>
    )}
  </div>
)
};

export default App