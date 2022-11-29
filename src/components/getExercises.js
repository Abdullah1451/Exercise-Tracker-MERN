import React from 'react'
import { Link } from 'react-router-dom'
import './GetExercises.css';

function GetExercises(props) {

    // console.log(props)
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td className="td_action">
                <Link className="link_action" type="button" to={"/edit/"+props.exercise._id} > edit </Link>   <button className="delete_action" onClick={() => {props.deleteExercise(props.exercise._id)}} >delete</button>
            </td>
    </tr>
    )
}

export default GetExercises