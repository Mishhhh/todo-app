import { ActionTypes } from "../Constants";

export const setTaskList=(TaskList)=>{
    return{
        type:ActionTypes.SET_TASKLIST,
        payload:TaskList
    }
    
}
export const RemoveFromATaskList=(taskId)=>{
    return{
        type:ActionTypes.REMOVE_TASK,
        payload: taskId
    }
}
export const updateTask = (updatedTask) => ({
    type: ActionTypes.UPDATE_TASK,
    payload: updatedTask
});
