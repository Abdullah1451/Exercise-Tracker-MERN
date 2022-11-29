import React, { useState } from 'react';
import axios from 'axios';

function CreateUserComponent() {

    const [user_name, setUsername] = useState("");
    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: user_name
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        setUsername("");
    }

    return (
        <div>
            <h2 className="d-flex justify-content-center mt-2 mb-4" >Create User</h2>
            <div className="mb-3 row">
                <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text" name='username' className="form-control" value ={user_name} onChange={handleChange} />
                </div>
            </div>
            <div className="mb-12 row" style={{ margin: "40px 10px 0px 10px" }}>
                <button className="btn btn-primary" onClick={onSubmit}>Submit form</button>
            </div>
        </div>
    )
}

export default CreateUserComponent