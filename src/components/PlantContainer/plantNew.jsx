import { useState } from 'react';

const PlantNew = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const [newPlant, setNewPlant] = useState({
        name: "",
        type: "",
        image: "",
        potSize: "",
        roomName: "", // is an empty sufficient for a dropdown? same for direction
        direction: "",
        userNotes: "",
        task: { completed: false, waterSchedule: 7 }
    });
    const handleInputChange = (e) => {
        setNewPlant({
            ...newPlant,
            [e.target.name]: e.target.value
        })
    }
    const submitNewPlant = (e) => {
        e.preventDefault()
        let validSubmission = true;
        if (newPlant.type.length < 2) {
            setIsValidState({
                valid: false,
                message: "Plant type is required. Use your best guess until plant API search is implemented!"
            })
            validSubmission = false;
        }
        if (validSubmission) {
            props.createNewPlant(newPlant)
            setNewPlant({
                name: "",
                type: "",
                image: "",
                potSize: "",
                roomName: "", // is an empty sufficient for a dropdown? same for direction
                direction: "",
                userNotes: "",
                task: { completed: false, waterSchedule: 7 }
            })
            setIsValidState({
                valid: true,
                message: ""
            })
            setShowing(false)
        }
    }
    return (
        <>
            {/* modal open to view new plant form */}
            {showing ?
                <div className="new-plant-form">
                    <button onClick={toggleShowing} className="outline-btn">X</button>
                    <form onSubmit={submitNewPlant}>
                        {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                        {props.newPlantServerError ? <p className='form-error'>{props.newPlantServerError}</p> : null}
                        Plant Name: <input onChange={handleInputChange} type="text" name="name" value={newPlant.name} />
                        Plant Type: <input onChange={handleInputChange} type="text" name="type" value={newPlant.type} />
                        Image: <input onChange={handleInputChange} type="text" name="image" value={newPlant.image} />
                        Pot Size: <input onChange={handleInputChange} type="number" name="potSize" value={newPlant.potSize} /> in.
                        Location: <input onChange={handleInputChange} type="text" name="roomName" value={newPlant.roomName} />
                        Window Placement: <input onChange={handleInputChange} type="text" name="direction" value={newPlant.direction} />
                        Notes: <input onChange={handleInputChange} type="text" name="userNotes" value={newPlant.userNotes} />
                        <button type="submit" className="solid-btn">Add Plant!</button>
                    </form>
                </div >
                : <button onClick={toggleShowing} className="solid-btn">Create New Plant!</button>}
        </>
    )
}

export default PlantNew;