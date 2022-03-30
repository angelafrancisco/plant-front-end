import PlantTasks from "./plantTasks";

const TaskContainer = (props) => {

    // set up function to check through every plant in array
    const checkIfTasksComplete = props.plants.every(plant => plant.task.completed);

    // UPDATE
    const updateTask = async (idToUpdate, taskToUpdate) => {
        try {
            const apiResponse = await fetch(`http://localhost:3001/plants/${idToUpdate}`, {
                // const apiResponse = await fetch(`https://plantpet-api.herokuapp.com/plants/${idToUpdate}`, {
                method: "PUT",
                body: JSON.stringify(taskToUpdate),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json();
            console.log(parsedResponse);
            if (parsedResponse.success) {
                // const newPlants = props.plants.map(plant => plant._id === idToUpdate ? taskToUpdate : plan)
                // setPlants(newPlants)
                props.getPlants()
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
            {checkIfTasksComplete ?
                <div className="message-box">
                    <h3 className="message-text">All tasks completed for today!</h3>
                </div>
                :
                <div className="grid-container">
                    {props.plants.map((plant) => {
                        if (!plant.task.completed) {
                            return <PlantTasks
                                key={plant._id}
                                plant={plant}
                                updateTask={updateTask}
                            ></PlantTasks>
                        }
                    })
                    }
                </div>
            }
        </>
    )
}

export default TaskContainer;