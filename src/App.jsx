import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function handleClick() {
    const imc = weight / (height / 100) ** 2;
    if (imc < 18.6) {
      setResult("Abaixo do peso, IMC: " + imc.toFixed(2));
    }
    if (imc >= 18.6 && imc < 24.9) {
      setResult("Peso normal, IMC: " + imc.toFixed(2));
    }
    if (imc >= 24.9 && imc < 29.9) {
      setResult("Sobrepeso, IMC: " + imc.toFixed(2));
    }
    if (imc >= 29.9 && imc < 34.9) {
      setResult("Obesidade grau 1, IMC: " + imc.toFixed(2));
    }
    if (imc >= 34.9 && imc < 39.9) {
      setResult("Obesidade grau 2, IMC: " + imc.toFixed(2));
    }
    if (imc >= 40) {
      setResult("Obesidade grau 3, IMC: " + imc.toFixed(2));
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-800">
      <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold text-center">Calculadora de IMC</h1>
        <p className="mt-2 text-xl font-semibold text-center">
          Preencha o formulário abaixo
        </p>
        <form className="flex flex-col items-center justify-center gap-4 mt-8">
          <input
            className="w-full p-4 text-3xl text-center text-gray-800 placeholder-gray-500 bg-gray-100 rounded-full outline-none"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Altura(cm)"
          />
          <input
            className="w-full p-4 text-3xl text-center text-gray-800 placeholder-gray-500 bg-gray-100 rounded-full outline-none"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Peso(Kg)"
          />

          <button
            onClick={() => handleClick()}
            type="button"
            className="w-full p-4 text-3xl text-center text-white bg-purple-600 rounded-full"
          >
            Calcular
          </button>

          <p className="mt-2 text-xl font-semibold text-center">{result}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
