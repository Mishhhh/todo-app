import{ combineReducers }from'redux';
import React from 'react';
import { addReducer } from './TaskListReducer';


const RootReducer =combineReducers ({
    AddtoList:addReducer,
    
});

export default RootReducer;