import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCreate from '../Modals/TaskCreate';
import Card from './Card';
import '../Components/TodoList.css'
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromATaskList } from '../Redux/Actions/TaskListtAction';



export const TodoList = () => {
    const [modal, setModal] = useState(false);
    const taskList= useSelector((state)=>state.AddtoList.TaskList)
    // const taskList=[]
    const dispatch=useDispatch()
    useEffect(() => {
        let arr = localStorage.getItem("TaskList")
        if (arr) {
            let obj = JSON.parse(arr)
        
        }
    }, [])

    const toggle = () => {
        setModal(!modal)

    }
    const saveTask = (TaskObj) => {
        // let id;
        // if(taskList.length==0){
        //     id=1
        // }
        // else{
        //     let temp=taskList[taskList.length-1].id
        //     id=temp+1;
        // }
        // TaskObj.id=id;
        

       
       
        //console.log( tempList.map((obj)=>{return obj }))
        setModal(false)
    }
    console.log(taskList);
    const deleteTask = (index) => {
        
        
        

        
    }
    const updateList = (obj, index) => {
        
        setModal(false)
        //window.location.reload();
    }
    
    
    return (
        <>
            <div className='header text-center' >
                <h2 >TODO List</h2>
                <button className='btn btn-primary mt-4' onClick={() => setModal(true)} >
                    Create Task
                </button>
            </div >
            <div className='Task-container'>
                {taskList && taskList.map((obj, index) =>
                    <Card
                        taskId={obj.id}
                        taskObj={obj}
                        index={index}
                        deleteTask={deleteTask}
                        updateList={updateList}
                    />)}
            </div>
            {
                <TaskCreate
                    toggle={toggle}
                    modalstatus={modal}
                    save={saveTask}
                    

                />
            }
        </>
    );
};

