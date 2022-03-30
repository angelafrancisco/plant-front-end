import PlantTasks from "./plantTasks";

const TaskContainer = (props) => {
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
    return (
        <>
            <h2 className="section-header">My Tasks</h2>
            <div className="task-btn-section">
                <a href="#" className="solid-btn">Today</a>
                <a href="#" className="outline-btn">Upcoming</a>
            </div>
            {props.plants.task.completed ?
                <div className="message-box">
                    <h3 className="message-text">All tasks completed for today!</h3>
                </div>
                :
                <div className="grid-container">
                    {props.plants.map((plant) => {
                        return <PlantTasks
                            key={plant._id}
                            name={plant.name}
                            image={plant.image}
                            roomName={plant.roomName}
                            task={plant.task}
                        ></PlantTasks>
                    })
                    }
                </div>
            }
        </>
    )
}

export default TaskContainer;