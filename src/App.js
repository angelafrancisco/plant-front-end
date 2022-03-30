import { useState, useEffect } from 'react';
import Header from './components/header';
import PlantTasks from './components/plantTasks';
import PlantNew from './components/plantNew';
import PlantIndex from './components/plantIndex';
import './styles/App.css';
import './styles/plantBody.css'

function App() {
  // const [plants, setPlants] = useState([]);
  const [plants, setPlants] = useState([{
    '_id': "1",
    'name': "Cactus",
    'type': "Cactus",
    'image': "https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    'potSize': "4",
    'roomName': "Office",
    'direction': "E",
    'userNotes': "",
    'waterSched': "7"
  }]);
  const [newPlantServerError, setNewPlantServerError] = useState("");
  const [requestError, setRequestError] = useState("");

  // CREATE
  const createNewPlant = async (newPlant) => {
    const apiResponse = await fetch("http://localhost:3001/plants", {
      // does this need /plants?
      // const apiResponse = await fetch("https://plantpet-api.herokuapp.com", {
      method: "POST",
      body: JSON.stringify(newPlant),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await apiResponse.json();
    console.log(parsedResponse);
    if (parsedResponse.success) {
      setPlants([parsedResponse.data, ...plants]);
    } else {
      setNewPlantServerError(parsedResponse.data);
      // for future could: refactor state from newPlantForm child to here, this is where we'd know if it worked or not
    }
  }

  // READ
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
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const tasks = await fetch("http://localhost:3000/tasks");
      // const tasks = await fetch("https://plantpet-api.herokuapp.com/tasks");
      const parsedTasks = await tasks.json();
      setTasks(parsedTasks.data);
    } catch (err) {
      console.log(err);
    }
  }

  // UPDATE
  const updatePlant = async (idToUpdate, plantToUpdate) => {
    try {
      const apiResponse = await fetch(`http://localhost:3001/plants/${idToUpdate}`, {
        // const apiResponse = await fetch(`https://plantpet-api.herokuapp.com/plants/${idToUpdate}`, {
        method: "PUT",
        body: JSON.stringify(plantToUpdate),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedResponse = await apiResponse.json();
      console.log(parsedResponse);
      if (parsedResponse.success) {
        const newPlants = plants.map(plant => plant._id === idToUpdate ? plantToUpdate : plant)
        setPlants(newPlants)
      } else {
        setRequestError(parsedResponse.data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  // DELETE
  const deletePlant = async (idToDelete) => {
    try {
      const apiResponse = await fetch(`http://localhost:3001/plants/${idToDelete}`, {
        // const apiResponse = await fetch(`https://plantpet-api.herokuapp.com/plant/${idToDelete}`, {
        method: "DELETE"
      })
      const parsedResponse = await apiResponse.json();
      console.log(parsedResponse);
      if (parsedResponse.success) {
        const newPlants = plants.filter(plant => plant._id !== idToDelete);
        setPlants(newPlants);
      } else {
        // todo: handle unsuccessful delete
      }
    } catch (err) {
      console.log(err);
      setRequestError(err.message)
    }
    console.log("deleting plant ID#" + idToDelete);
  }
  useEffect(getPlants, []);
  return (
    <div className="App">
      <Header></Header>
      <h1>Welcome to PlantPet!</h1>
      <h2 className="section-header">My Tasks</h2>
      {tasks.map((task) => {
        return <PlantTasks
          key={task._id}
          task={task}
        ></PlantTasks>
      })}
      <h2 className="section-header">My Plants</h2>
      <PlantNew
        createNewPlant={createNewPlant}
        newPlantServerError={newPlantServerError}
      ></PlantNew>
      {plants.map((plant) => {
        return <PlantIndex
          key={plant._id}
          plant={plant}
          updatePlant={updatePlant}
          deletePlant={deletePlant}
          requestError={requestError}
        ></PlantIndex>
      })}
    </div>
  );
}

export default App;