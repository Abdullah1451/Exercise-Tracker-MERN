import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Exercise from './getExercises'
import './ExerciseListComponent.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ExercisesListComponent() {

    const [exercises, setExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            setExercises(
                response.data
            )
            setIsError(false);
            setIsLoading(false);
        })
        .catch((error) => {
            setIsError(true);
            // console.log("toast");
        })

    },[exercises])
    toast.clearWaitingQueue();

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/'+id) 
            .then(res => console.log(res.data));

    }


    return (
        
        <div>
            {
                !isError?<div>
                    <h2 className="d-flex justify-content-center mt-2 mb-4" >Logged Exercises</h2>
                    <table className="table ">
                        <thead className="thead table-secondary">
                            <tr>
                                <th>Username</th>
                                <th>Description</th>
                                <th>Duration</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            !isLoading?<tbody>
                                {exercises?.map((currentExercise) => <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />)}
                            </tbody>:<div className="toastError">{toast.info("please Wait", {autoClose:1000})}</div>
                        }
                    </table>
                </div>:<h1 className="error_h1">Error<div className="toastError">{toast.error("ERROR", {autoClose:2000})}{toast.info("Please Reload !")}</div> </h1>
            }
        </div>
    )
}

export default ExercisesListComponent