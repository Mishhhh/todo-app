import React, { useState } from 'react';
import './Card.css'
import EditTask from '../Modals/EditTask';
import { RemoveFromATaskList } from '../Redux/Actions/TaskListtAction';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ taskId,taskObj, index, deleteTask, updateList }) => {
    const [color,setColor]=useState("white")
    const dispatch=useDispatch()
    const handleDelete = () => {
        dispatch(RemoveFromATaskList(taskId))
    }
    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
    }
    const updateTask = (obj) => {
        updateList(obj, index)
    }
    const handleClick=()=>
    {
        setColor("#50C878")
    }

    return (
        <div className="card-wrapper mr-5" style={{backgroundColor:color}}>
            <div className="card-top" style={{ backgroundColor: "black" }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: "yellow", borderRadius: "10px", "width": "fit-content" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i className="far fa-edit mr-3" style={{ "color": 'Bluevoilet', "cursor": "pointer", "margin": "10px" }} onClick={() => setModal(true)} ></i>
                    <i className="fas fa-trash-alt" style={{ "color": 'Red', "cursor": "pointer" }} onClick={handleDelete} ></i>
                    <i className="fa-solid fa-check" style={{ "color": 'Green', "cursor": "pointer", "margin": "10px" }} onClick={handleClick}></i>
                </div>
            </div>
            {<EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />}

        </div>
    );
};

export default Card;