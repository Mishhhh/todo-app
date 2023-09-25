import { ActionTypes } from "../Constants";

const initialState = {
    TaskList: [],


}
export function addReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_TASKLIST:
            return { ...state, TaskList: [...state.TaskList, action.payload] }

        case ActionTypes.REMOVE_TASK:
            console.log("here");
            return { ...state, TaskList: state.TaskList.filter((item) => item.id !== action.payload) }

        case ActionTypes.UPDATE_TASK:
            const updatedTaskIndex = state.TaskList.findIndex(task => task.id === action.payload.id);
            const updatedTaskList = [...state.TaskList];
            updatedTaskList[updatedTaskIndex] = action.payload;
            return { ...state, TaskList: updatedTaskList };

        default:
            return state
    }

}