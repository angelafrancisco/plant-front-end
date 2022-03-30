import Header from './components/header';
import PlantIndex from './components/plantIndex';
import './styles/App.css';
import './styles/plantIndex.css'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Welcome to PlantPet!</h1>
      <PlantIndex></PlantIndex>
    </div>
  );
}

export default App;