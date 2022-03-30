import { useState, useEffect } from 'react';
import Header from './components/header';
import TaskContainer from './components/TaskContainer/taskContainer';
import PlantContainer from './components/PlantContainer/plantContainer';
import './styles/App.css';
import './styles/plantBody.css'

function App() {
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
      const plants = await fetch("http://localhost:3000/plants");
      // const plants = await fetch("https://plantpet-api.herokuapp.com/plants");
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
      <h1>Welcome to PlantPet!</h1>
      <TaskContainer plants={plants}></TaskContainer>
      <PlantContainer plants={plants}></PlantContainer>
    </div>
  );
}

export default App;