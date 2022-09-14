export let apiReducer=(state={},action)=>{
    console.log(action);
    switch(action.type){
        case "FETCH_USERS":
            return {...state,users:action.payload}
            case "FETCH_USER":
                return {...state,user:action.payload}
            default:
                return state
    }
    
}