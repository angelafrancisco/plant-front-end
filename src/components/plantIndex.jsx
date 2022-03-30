import { useState } from "react";

const PlantIndex = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" });
    const [updatePlant, setUpdatePlant] = useState({
        name: props.plant.name,
        type: props.plant.type,
        image: props.plant.image,
        potSize: props.plant.potSize,
        roomName: props.plant.roomName,
        direction: props.plant.direction,
        userNotes: props.plant.userNotes,
        _id: props.plant._id
    });
    const handleInputChange = (e) => {
        setUpdatePlant({
            ...updatePlant,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdatePlant = (e) => {
        e.preventDefault();
        props.updatePlant(props.plant._id, updatePlant);
        setShowing(false);
    }
    return (
        <>
            <h2 className="section-header">My Plants</h2>
            <div className="grid-container">
                {/* ternary for if plant exists show */}
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
                        {/* modal opens to edit */}
                        {showing ?
                            <div className="edit-plant-form">
                                <form onSubmit={submitUpdatePlant}>
                                    {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                                    Plant Name: <input onChange={handleInputChange} type="text" name="name" value={updatePlant.name} />
                                    Plant Type: <input onChange={handleInputChange} type="text" name="type" value={updatePlant.type} />
                                    Image: <input onChange={handleInputChange} type="text" name="image" value={updatePlant.image} />
                                    Pot Size: <input onChange={handleInputChange} type="number" name="potSize" value={updatePlant.potSize} /> in.
                                    Location: <input onChange={handleInputChange} type="text" name="roomName" value={updatePlant.roomName} />
                                    Window Placement: <input onChange={handleInputChange} type="text" name="direction" value={updatePlant.direction} />
                                    Notes: <input onChange={handleInputChange} type="text" name="userNotes" value={updatePlant.userNotes} />
                                    <button type="submit" className="solid-btn">Update</button>
                                </form>
                            </div>
                            : <button onClick={toggleShowing} className="outline-btn">Edit</button>}
                        <button onClick={() => { props.deletePlant(props.plant._id) }} className="outline-btn">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlantIndex;