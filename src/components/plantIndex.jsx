const PlantIndex = (props) => {
    return (
        <div className="grid-container">
            <div className="plant-index-container">
                <img src="#" alt="plant photo" className="plant-index-img" />
                <div className="plant-index-box">
                    <div className="plant-index-text">
                        <h3 className="plant-text-name">Plant Name</h3>
                        <p className="plant-text-location">Room Location</p>
                    </div>
                    <div className="plant-task-btn">
                        <button className="task-btn">Watered!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantIndex;