import logo from './logo.svg';
import './App.css';

const myList = (
  <ul>
    <li>Jeden</li>
    <li>Dwa</li>
    <li>Tri</li>
  </ul>
);

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      {myList}
      Kurwele
      </header>
      
    </div>
  );
}

export default App;
