import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/navbarComponent";
import CreateUser from "./components/createUserComponent";
import CreateExercise from "./components/createExerciseComponent";
import ExercisesList from "./components/exercisesListComponent";
import EditExercise from "./components/editExerciseComponent";
import Error from './components/Error';



function App() {
  return (
    <Router>
      <ToastContainer limit={1}/>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
        
          <Route exact path="/"
          element={ <ExercisesList/> }
          />
          <Route path="/" exact element={ <ExercisesList/> } />
          <Route path="/edit/:id"  element={ <EditExercise/> } />
          <Route path="/create"  element={ <CreateExercise/> } />
          <Route path="/user"  element={ <CreateUser/> } />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
