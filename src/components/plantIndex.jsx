const PlantIndex = (props) => {
    return (
        <>
            <div className="task-btn-section">
                <a href="#" className="solid-btn">Today</a>
                <a href="#" className="outline-btn">Upcoming</a>
            </div>
            <div className="grid-container">
                {/* plant index container should have props passed */}
                <div className="plant-index-container">
                    {/* <img src={props.plant.image} alt="plant photo" className="plant-index-img" /> */}
                    <div className="plant-index-img" style={{ backgroundImage: `url(${props.plant.image})` }}></div>
                    <div className="plant-index-box">
                        <div className="plant-index-text-box">
                            <h3 className="plant-text-name">{props.plant.name}</h3>
                            <p className="plant-text type">Type: {props.plant.type}</p>
                            <p className="plant-text">Location: {props.plant.roomName} - {props.plant.direction} facing window</p>
                            <p className="plant-text">Pot Size: {props.plant.potSize}in</p>
                            <p className="plant-text">Notes: {props.plant.userNotes}</p>
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

export default PlantIndex;