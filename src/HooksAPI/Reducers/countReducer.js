let countReducer=(state=0,action)=>{
    console.log(action);
    if(action.type==="INCREMENT"){
        return state+1
    }
    else if(action.type==="DECREMENT"){
        return state-1
    }
    else if(action.type==="RESET"){
        return 0
    }
    else{
    return state;
    }
}
export {countReducer}