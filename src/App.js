import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Contador from "./components/Contador";

function App() {
    const handleCliqueAqui = () => {
        console.log("Botão 'clique aqui' clicado ")
    }

    const handleOutroTexto = () => {
        console.log("meu pobrema é outro douto")
    }

  return (
    <div>
        <h1 className="title">LAL de lal</h1>
        <Button texto="LAl de lal" onClickButton={handleCliqueAqui} />
        <Button texto="uiuiui" onClickButton={handleOutroTexto} />
        <Contador/>

    </div>
  );
}

export default App;
