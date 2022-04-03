const UserLogin = () => {
    return (
        <div className="new-form">
            <button onClick={toggleShowing} className="outline-btn">X</button>
            <form onSubmit={submitNewUser}>
                {isValidState.valid ? null : <p className='form-error'>{isValidState.message}</p>}
                {props.newUserServerError ? <p className='form-error'>{props.newUserServerError}</p> : null}
                <label for="username">Username: </label>
                <input onChange={handleInputChange} type="text" name="username" value={newUser.username} />
                <label for="password">Password: </label>
                <input onChange={handleInputChange} type="password" name="password" value={newUser.password} />
                <button type="submit" className="solid-btn">Register!</button>
            </form>
        </div >

    )
}


export default UserLogin;