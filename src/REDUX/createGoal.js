








const createGoal=(name)=>{

return(dispatch,getState,{getFirebase,getFirestore})=>{

const firestore=getFirestore();

firestore.collection("todo").add({

                goal:name


}).then(()=>{

        dispatch({

                type:"Add_Goal",
                payload:name

    })
}).catch(error=>{

        dispatch({

                type:"ERROR_ADDING",
                payload:error

    })


})


}

}

export default createGoal;