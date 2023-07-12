import {createStore} from "redux"

const intialState ={
    cakes: []
}

function cakeReducer(state =intialState,action){
    switch(action.type){
      case "ADD_CAKE":
        return{
            ...state,
         cakes:[...state.cakes,action.payload]   
        
        };

        case "REMOVE_CAKE":
            return{
                ...state,
                cakes: state.cakes.filter(cake => cake.id  !==action.payload)
            };
            default:
            return state
        }
        
    }
   

const store = createStore(cakeReducer);


export default store