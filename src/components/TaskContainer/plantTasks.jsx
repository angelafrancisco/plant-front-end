const PlantTasks = (props) => {
    return (
        <>
            <div className="plant-index-container">
                <img src="#" alt="plant" className="plant-index-img small-img" />
                <div className="plant-index-box">
                    <div className="plant-index-text">
                        <h3 className="plant-text-name">{props.name}</h3>
                        <p className="plant-text">{props.roomName}</p>
                        {!props.task.completed ?
                            <p className="plant-text">Task: Water plant!</p>
                            : null
                        }
                    </div>
                    <div className="plant-task-btn">
                        <button className="solid-btn submit" type="submit">Done!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlantTasks;