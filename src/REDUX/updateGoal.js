

const updateGoal=(id)=>{


return(dispatch,getState,{getFirebase,getFirestore})=>{


const firestore=getFirestore();

let name=prompt("Enter UPDATE");

if(name){

firestore.collection("todo").doc(id).update({

        goal:name


})


}else {

            dispatch({

                        type:"No Update Entered"

            })


}



}




}


export default updateGoal;