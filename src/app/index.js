import {createStore, combineReducers, applyMiddleware} from 'redux';


const mathReducer = (state= {
    reduct:1,
    lastValues: []
},action) => {
    switch(action.type) {
        case "ADD":
            state = {
                ...state,
                result:state.result + action.payload,
                lastValues:[...state.lastValues,action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result:state.result - action.payload,
                lastValues:[...state.lastValues,action.payload]
            };
            break;
    }
    return state;
}


const userReducer = (state= {
    name:"Phil",
    age: 27
},action) => {
    switch(action.type) {
        case "SET_NAME":
            state = {
                ...state,
                result: action.payload,
                lastValues:[...state.lastValues,action.payload]
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                result: action.payload,
                lastValues:[...state.lastValues,action.payload]
            };
            break;
    }
    return state;
}


const myLogger = (store) => (next) => (action) => {
    console.log("Log action", action);
    next(action);
};

const allReducers = combineReducers({
    mathReducer,
    userReducer
});



const store = createStore(allReducers, {}, applyMiddleware(myLogger));

store.subscribe(() => {
    console.log("STORE updated", store.getState());
});

store.dispatch({
   type:"ADD",
   payload:100 
});

store.dispatch({
    type:"ADD",
    payload:22 
 });
 
store.dispatch({
    type:"SUBTRACT",
    payload:10 
 });