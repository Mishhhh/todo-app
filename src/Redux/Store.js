import { composeWithDevTools } from "@redux-devtools/extension"
import { createStore } from "redux"
import RootReducer from "./Reducer/RootReducer"

const initialState={
    TaskList:[],
    task:{
        TaskName:"",
        TaskDescription:""
    }

}

const Store=createStore(
    RootReducer,
    initialState,
    composeWithDevTools()
)
export default Store