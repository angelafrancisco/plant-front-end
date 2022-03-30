const PlantTasks = (props) => {
    return (
        <>
            <div className="task-btn-section">
                <a href="#" className="solid-btn">Today</a>
                <a href="#" className="outline-btn">Upcoming</a>
            </div>
            <div className="grid-container">
                {/* plant index container should have props passed */}
                <div className="plant-index-container">
                    <img src="#" alt="plant photo" className="plant-index-img" />
                    <div className="plant-index-box">
                        <div className="plant-index-text">
                            {/* props.plant.name */}
                            <h3 className="plant-text-name">Plant Name</h3>
                            {/* props.plant.location */}
                            <p className="plant-text-location">Room Location</p>
                        </div>
                        {/* submit button to complete task */}
                        <div className="plant-task-btn">
                            <button className="solid-btn submit" type="submit">Water!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlantTasks;