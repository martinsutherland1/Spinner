import React, {useState} from 'react'
import Request from '../Helpers/Request'

const Users = ({users}) => {

    const [user, setUser] = useState(
        {
            username: ""
        }
    )

    const postUser = function(user){
        const request = new Request();
         request.post("/api/users", user)
        .then(() => window.location = '/')
      }

    
    
    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedTeam = {...user}
        let upperCase = event.target.value;
        copiedTeam[propertyName] = upperCase.toUpperCase()
        setUser(copiedTeam)
        
    }
    
    const handleSubmit = function(event){
        event.preventDefault();
        console.log(user)
        if (users.length < 8){
            postUser(user);  
        }
        setUser({
            username: ""
        })
    }

    

    

    return (
        <div>
       
        <div>
        
        
        <form onSubmit={handleSubmit} id="names">
        <div>
        <label>NAME</label>
        </div>
        <div>
        <input type="text" placeholder="" name="username" onChange={handleChange} value={user.username} />
        </div>
         <div>
        <button type="submit">ADD</button>
        </div>
        </form>
        </div>
        </div>
    )
  
}

export default Users;