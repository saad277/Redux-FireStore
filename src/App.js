import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import createGoal from './REDUX/createGoal'
import deleteGoal from './REDUX/deleteGoal'
import updateGoal from './REDUX/updateGoal'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class App extends Component {



  state = {

    name: "",


  }

  inputHandler = (e) => {




    this.setState({

      [e.target.name]: e.target.value


    })


  }



  render() {

    

    console.log(this.props)


    let list

    if (this.props.todo) {



      list = this.props.todo.map((x, id) => {

        return (<div key={id} className="list">



          <div className="col s12 m8 offset-m2 l6 offset-l3">

      <div className="card-panel grey lighten-5 z-depth-1">
 
   
    <div >
      <span className="text">
        {x.goal}    
      </span>  
      <a className="btn-floating btn-small waves-effect waves-light blue delete" onClick={() => this.props.update(x.id)}><i className="material-icons">cloud_upload</i></a>
      <a className="btn-floating btn-small waves-effect waves-light blue delete" onClick={() => this.props.delete(x.id)}><i className="material-icons">close</i></a>
     
    </div>
 
</div>
</div>





        </div>
        
       
        
        
        
        
        
        
        )


      })


    }

    return (
      <div className="App ">
         
        <h1 className="App-header">      FireStore Redux         </h1>

       
        <div className="form input-field col s6">

        <i className="material-icons prefix">account_circle</i>
       
        <label htmlFor="name"> Enter Todo    </label>
        <input type="text" name="name" onChange={this.inputHandler}  />

        <a className="btn-floating btn-medium waves-effect waves-light red" onClick={() => this.props.add(this.state.name)}><i className="material-icons">add</i></a>

        </div>

        

        <br />   <br />
        <div>       {list}       </div>

      </div>
    );
  }


}

const mapStateToProps = (state) => {



  return {

    todo: state.firestore.ordered.todo
  }



}




const mapDispatchToProps = (dispatch) => {



  return {

    add: (name) => {


      dispatch(createGoal(name))

    },

    delete: (id) => {


      dispatch(deleteGoal(id))


    },

    update:(id)=>{

        dispatch(   updateGoal(id)            )

    }


  }



}



export default compose(

  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'todo' }])
)(App);
