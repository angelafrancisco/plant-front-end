import PlantNew from "./plantNew";
import PlantIndex from "./plantIndex";

const PlantContainer = (props) => {
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
                const newPlants = props.plants.map(plant => plant._id === idToUpdate ? plantToUpdate : plant)
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
                const newPlants = props.plants.filter(plant => plant._id !== idToDelete);
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

    return (
        <>
            <h2 className="section-header">My Plants</h2>
            <PlantNew
                createNewPlant={createNewPlant}
                newPlantServerError={newPlantServerError}
            ></PlantNew>
            {!props.plants ?
                <div className="message-box">
                    <h3 className="message-text">Looks like you haven't added any plants yet!</h3>
                    <PlantNew
                        createNewPlant={createNewPlant}
                        newPlantServerError={newPlantServerError}
                    ></PlantNew>
                </div>
                :
                <div className="grid-container">
                    {props.plants.map((plant) => {
                        return <PlantIndex
                            key={plant._id}
                            plant={plant}
                            updatePlant={updatePlant}
                            deletePlant={deletePlant}
                            requestError={requestError}
                        ></PlantIndex>
                    })}
                </div>
            }
        </>
    )
}

export default PlantContainer;