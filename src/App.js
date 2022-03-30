import { useState, useEffect } from 'react';
import Header from './components/header';
import PlantTasks from './components/plantTasks';
import PlantIndex from './components/plantIndex';
import './styles/App.css';
import './styles/plantBody.css'


function App() {
  const [plants, setPlants] = useState([{
    '_id': "1",
    'name': "Cactus",
    'type': "Cactus",
    'image': "https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    'potSize': "4",
    'roomName': "Office",
    'direction': "E",
    'userNotes': ""
  }])
  const getPlants = async () => {
    try {
      const plants = await fetch("http://localhost:3000/plants")
      // const plants = await fetch("https://plantpet.herokuapp.com/plants")
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
      {/* tasks will go here */}
      <PlantTasks></PlantTasks>
      {plants.map((plant) => {
        return <PlantIndex key={plant._id} plant={plant}></PlantIndex>
      })}
    </div>
  );
}

export default App;