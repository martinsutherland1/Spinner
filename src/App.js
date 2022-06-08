import React, {useState, useEffect} from 'react';
import './App.css';
import Spinner from './containers/Spinner';
import Users from './components/Users';
import Request from './Helpers/Request';
import { Circles, Grid, TailSpin, Oval } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App() {

  const [users, setUsers] = useState([])
  const [dataAvailable, setDataAvailable] = useState(false)
  const endPoint = "https://mg-backend-server.herokuapp.com"
  
  const requestAll = function(){
      const request = new Request();
      const usersPromise = request.get(endPoint + '/api/users')

      
      
     Promise.all([usersPromise])
      .then((data) => {
          setUsers(data[0]);
          setDataAvailable(true)
      })
    }
    useEffect(()=>{
      requestAll()
    }, [])

 

    const deleteUser = function(id){
      const request = new Request();
      const url = endPoint + "/api/users/" + id
      request.delete(url)
      .then(() => window.location = "/")
    }

    const clearNames = (id) => {
      requestAll()
      deleteUser(id)
    }
    const clearAll = () => {
      requestAll()
      for (let i = 0; i < users.length; i++){
        deleteUser(users[i].id)
      }
      for (let i = 0; i < users.length; i++){
        deleteUser(users[i].id)
      }
      
    }

    if (!dataAvailable){
      return (
        <div className="App">
          <img width='1000px' height="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"></img>
          <div id="loading"><Oval  color="white" height={80} width={80} /></div>
           
        </div>
        
      )
    } else {

      return (

        <div className="App">
          <img width='1000px' height="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"></img>
          <Users users={users} endPoint={endPoint} />
          <Spinner names={users} clearNames={clearNames} clearAll={clearAll}  />
          
        </div>
      );

    }


  
}

export default App;
