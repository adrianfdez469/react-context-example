import './App.css';
import ParentCmp from './components/parentComponent';
import { CounterProvider } from './context/context';


function App() {
  return (
    <div className="root">
      <CounterProvider>
        <ParentCmp />
      </CounterProvider>
    </div>
  );
}

export default App;
