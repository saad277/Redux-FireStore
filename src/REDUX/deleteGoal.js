









const deleteGoal=(id)=>{



    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore=getFirestore();

        firestore.collection("todo").doc(id).delete();







    }







}


export default deleteGoal;