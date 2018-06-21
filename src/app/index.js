import {createStore} from 'redux';

const initialState = {
    reduct:1,
    lastValues: []
};

const reducer = (state,action) => {
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

const store = createStore(reducer, 1);

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