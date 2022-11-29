import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const EditExerciseComponent = () => {
    const params = useParams();
    const [payload, setPayload] = useState();
    const [users, setUsers] = useState([]);
    const handleChange = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
        
    }

// console.log(params.id)
    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    setUsers(
                        response.data.map(user => user.username)
                    );
                }
            })
    })


    useEffect(() => {
        axios.get('http://localhost:5000/exercises/'+params.id)
            .then(response => {
                setPayload({
                    username: response.data.username,
                    description: response.data.description,
                    duration: response.data.duration,
                    date: response.data.date,
            })
            })
            .catch((error) => {
                console.log(error);
            })
    }, [params.id])




    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: payload?.username,
            description: payload?.description,
            duration: Number(payload?.duration),
            date: Date(payload?.date),
        }
        console.log(exercise);

        axios.post('http://localhost:5000/exercises/update/'+params.id, exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }


    
    return (
        <div>
            <h2 className="d-flex justify-content-center mt-2 mb-4" >Update Exercises</h2>
            <div className="mb-3 row">
                <label htmlFor="inputGroupSelect" className="col-sm-2 col-form-label">Username</label>
                <div className=" col-sm-10">
                    <select className="form-control" id="inputGroupSelect" name="username" value={payload?.username}
                        onChange={handleChange}>
                        {users?.map((user, index) => {
                            return (<option key={index} defaultValue={user}>{user}</option>)
                        })}
                    </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <input type="text" name='description' className="form-control" onChange={handleChange} defaultValue={payload?.description} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputDuration" className="col-sm-2 col-form-label">Duration</label>
                <div className="col-sm-10">
                    <input type="text" name='duration' className="form-control" onChange={handleChange} defaultValue={payload?.duration} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-10">
                    <input type="date" name='date' className="form-control" onChange={handleChange} defaultValue={payload?.date.substring(0,10)} />
                </div>
            </div>
            <div className="mb-12 row" style={{ margin: "40px 10px 0px 10px" }}>
                <button className="btn btn-primary" onClick={onSubmit}>Submit form</button>
            </div>

        </div>

    )
}

export default EditExerciseComponent;