
//library core
function createStore(reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state

    let state;
    let listeners = [];

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    //getnewsdtate of the app
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener)
    }

    return {
        getState,
        subscribe,
        dispatch
    }

}


//app code
function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }
    return state
}//https://www.youtube.com/watch?time_continue=196&v=QU_WvPaC6cM&feature=emb_logo



const store=createStore(todos)