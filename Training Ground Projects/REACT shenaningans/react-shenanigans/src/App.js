// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import TitleScreen from './TitleScreen';
import HighScore from './HighScore';
import {highScores} from './highScoreData';


// W zadaniu chodziło o dopisanie componentu wyświetlającego High Scores z pliku highScoresData.js
function App(props) {
  return (
    <>
      <TitleScreen />
      <div>
      {
        highScores.map(scores => 
        <HighScore commentObject={scores} />
      )
      }
    </div>
    </>
    
  );
}

export default App;