import { useState, useEffect } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import TaskContainer from './components/TaskContainer/taskContainer';
import PlantContainer from './components/PlantContainer/plantContainer';
import Footer from './components/footer';
import './styles/App.css';
import './styles/header.css';
import './styles/plantBody.css';
import './styles/footer.css';

function App() {
  const [requestError, setRequestError] = useState("");
  // const [plants, setPlants] = useState([]);
  const [plants, setPlants] = useState([{
    '_id': "1",
    'name': "Cactus",
    'type': "Cactus",
    'image': "https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    'potSize': 4,
    'roomName': "Office",
    'direction': "E",
    'userNotes': "",
    'task': { 'completed': false, 'waterSchedule': 7 }
  }]);

  const getPlants = async () => {
    try {
      // const plants = await fetch("http://localhost:3001/plants");
      const plants = await fetch("https://plantpet-api.herokuapp.com/");
      const parsedPlants = await plants.json();
      setPlants(parsedPlants.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(getPlants, []);

  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <div className="content-wrapper">
        <TaskContainer plants={plants} setPlants={setPlants} requestError={requestError}></TaskContainer>
        <PlantContainer plants={plants} setPlants={setPlants} requestError={requestError}></PlantContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;