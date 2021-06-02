import React from 'react';
import './App.css';
import ParentCmp from './components/parentComponent';

// Creando el contexto
export const CounterContext = React.createContext();

function App() {

  // Aqui gestiono el estado del contador
  const [counter, setCounter] = React.useState(0);
  // Creo el metodo adicionar que incrementa el contador
  const add = () => {
    setCounter(counter + 1);
  }
  // Creo el metodo restar que decrementa el contador
  const sub = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="root">
      {/* Aqui crea el proveedor del contexto o "Provider", esto lo que hace es que todos los componentes que esten dentro de la gerarquia arbolea de componentes, tengan la posiblidad de subscribirse
        a el, y si alguno de sus componente hijos, nietos, biznietos, etc, se subscribe, van a tener la posibilidad de ver los valores, que se pasan por la prop: "value" que 
        pide el provider. Y esos hijos al estar subscritos, si el "value" cambia, los hijos pueden ver ese cambio.
        */}
      <CounterContext.Provider value={{ contador: counter, increment: add, decrement: sub }}>
        <ParentCmp />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
