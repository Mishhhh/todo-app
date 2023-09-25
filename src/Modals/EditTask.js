import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "taskName") {
            setTaskName(value)
        }
        else {
            setTaskDescription(value)
        }

    }
    const handleUpdate = (e) => {
        //e.preventDefault();
        let temp = {}
        temp['Name'] = taskName
        temp['Description'] = taskDescription
        updateTask(temp)
    }
    useEffect(() => {
        setTaskName(taskObj.Name)
        setTaskDescription(taskObj.Description)
    }, [])



    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='TaskName'>
                            <label>Update Task</label>
                            <input name='taskName' type='text' className='form-textarea' value={taskName} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows={5} name='description' className='form-textarea' value={taskDescription} onChange={handleChange} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    );

}


export default EditTask;