

const goal={


            goals:["eat","sleep","repeat"]


}


const goalReducer=(state=goal.goals,action)=>{

   

switch(action.type){


   case "Add_Goal":
       console.log("ADDED")
       return state

    case "ERROR_ADDING":
        console.log("error")
        return state



}

return state


}

export default goalReducer;