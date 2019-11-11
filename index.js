function createStore () {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state

    let state;
    let listeners= [];
    
    const getState=()=>state
    const getListeners=()=>listeners

    const subscribe = (listener)=>{
        listeners.push(listener);
        return()=>{
            listeners=listeners.filter((l)=>l!==listener)
        }
    }

    return{
        getState,
        getListeners,
        subscribe
    }

}

const store=createStore();
x_x=01;
store.subscribe((x_x)=>{
    console.log("the new state is:", store.getState)
    console.log("the new state is:", store.getListeners)
})