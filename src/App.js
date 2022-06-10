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

  useEffect(() => {
    const data = localStorage.getItem("all-users");
    if (data){
      setUsers(JSON.parse(data));
      setDataAvailable(true)
      }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("all-users", JSON.stringify(users))
  // })

  console.log(users)

  
  // const requestAll = function(){
  //     const request = new Request();
  //     const usersPromise = request.get(endPoint + '/api/users')

      
      
  //    Promise.all([usersPromise])
  //     .then((data) => {
  //         setUsers(data[0]);
  //         setDataAvailable(true)
  //     })
  //   }
  //   useEffect(()=>{
  //     requestAll()
  //   }, [])

  function refreshPage() {
    window.location.reload(false);
  }

    const deleteUser = function(id){
      const request = new Request();
      const url = endPoint + "/api/users/" + id
      request.delete(url)
      .then(() => window.location = "/")
    }

    const clearNames = (index) => {
      // requestAll()
      // deleteUser(id)
      users.splice(index, 1)
      console.log('new users', users)
      localStorage.setItem("all-users", JSON.stringify(users))
      refreshPage()
    }
    const clearAll = () => {
      // requestAll()
      for (let i = 0; i < users.length; i++){
        // deleteUser(users[i].id)
        setUsers([])
        localStorage.clear();
        refreshPage()
      }
      
      
    }

    // if (!dataAvailable){
    //   return (
    //     <div className="App">
    //       <img width='1000px' height="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"></img>
    //       <div id="loading"><Oval  color="white" height={80} width={80} /></div>
           
    //     </div>
        
    //   )
    // } 

      return (

        <div className="App">
          <Users refreshPage={refreshPage} users={users} endPoint={endPoint} setUsers={setUsers} setDataAvailable={setDataAvailable} />
          <Spinner names={users} clearNames={clearNames} clearAll={clearAll}  />
          
        </div>
      );

    


  
}

export default App;
