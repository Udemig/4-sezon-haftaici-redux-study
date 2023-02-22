const initialState = [];

const todosReducer = (state = initialState, action) => {
  //console.log(action);
  if (action.type === "ADD_TODO") {
    let newState = [...state, action.payload];
    return newState;
  }
  if (action.type === "DELETE_TODO") {
    let tempArr=[]
    for(let i=0; i<state.length;i++){
        if(state[i].id !== action.payload){
            tempArr.push(state[i])
        }else{
            tempArr.push({...state[i],active:false})
        }
    }
    return tempArr
  }
  if (action.type === "EDIT_TODO") {
    let tempArr = [];
    for (let i = 0; i < state.length; i++) {
      if (state[i].id !== action.payload.id) {
        tempArr.push(state[i]);
      } else {
        tempArr.push(action.payload);
      }
    }
    return tempArr;
  }
  if (action.type === "CHANGE_ISDONE") {
    let tempArr = [];
    for (let i = 0; i<state.length; i++) {
      if (state[i].id !== action.payload) {
        tempArr.push(state[i]);
      } else {
        tempArr.push({ ...state[i], isDone: !state[i].isDone });
      }
    }
    return tempArr;
  }
  if(action.type === "DELETE_ALL"){
    let tempArr=[]
    for(let i=0;i<state.length;i++){
        tempArr.push({...state[i],active:false})
    }
    return tempArr
  }
  if(action.type === "RECOVERY_ALL"){
    let tempArr=[]
    for(let i=0;i<state.length;i++){
        tempArr.push({...state[i],active:true})
    }
    return tempArr
  }
  if(action.type === "DELETE_ALL_PERMANENTLY"){
    return []
  }
  return state;
};

export default todosReducer;
