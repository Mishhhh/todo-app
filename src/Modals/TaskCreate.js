import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './TaskCreate.css';
import { useDispatch } from 'react-redux';
import { setTaskList } from '../Redux/Actions/TaskListtAction';
import { v4 as uuidv4 } from 'uuid';


const TaskCreate = ({ modalstatus, toggle, save}) => {
    const dispatch=useDispatch()
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const handleChange = (e) => {
        // const name=e.target.name
        // const Description=e.taget.value
        const { name, value } = e.target
        if (name === "taskName") {
            setTaskName(value)
        }
        else {
            setTaskDescription(value)
        }

    }
    const saveHandle = () => {
        let TaskObj = {}
        TaskObj["id"]=uuidv4();
        TaskObj["Name"] = taskName
        TaskObj["Description"] = taskDescription
        
        dispatch(setTaskList(TaskObj))
        
        save(TaskObj)
        setTaskName("")
        setTaskDescription("")
    }
   


    return (
        <div>
            <Modal isOpen={modalstatus} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='TaskName'>
                            <label>Task Name</label>
                            <input name='taskName' type='text' className='form-textarea' value={taskName} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows={5} name='description' className='form-textarea' value={taskDescription} onChange={handleChange} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveHandle}>
                        Add Task
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    );

}


export default TaskCreate;