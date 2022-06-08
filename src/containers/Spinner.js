import React, {useState, useEffect} from 'react';

const Spinner = ({names, clearNames, clearAll}) => {

    const marvel = [
    "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg",
    "http://x.annihil.us/u/prod/marvel/i/mg/5/e0/537bb460046bd/standard_xlarge.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4/standard_xlarge.jpg"
    ]

    
    const [winner, setWinner] = useState(null);
    const [showWinner, setShowWinner] = useState(false);
    let num = 0



    const selectWinner = () => {
        let pick = getRandomInt(names.length)
        setWinner(names[pick].username)
      }
    
    const mix = () => {
        setShowWinner(false)
        
        const interval = setInterval(() => {
        const rand = getRandomInt(names.length)
                
        setWinner(names[rand].username)
        num = num + 1
            
        if (num === 20){
            clearInterval(interval)
            selectWinner()
            setShowWinner(true)
            }
                
            }, 200);
   
    }
      

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

   const returnNames = names.map((name, index) => {

        if (winner === name.username){
            return (
                <div id="selected-name-box">
                <p>{name.username}</p>
                  <img src={marvel[index]}/>
                  
                  <div><button onClick={() => clearNames(name.id)}>REMOVE</button></div>
                </div>
                
            )
        } else {
            
            return (
                <>
                 <div id="name-box">
                    <p>{name.username}</p>
                   <img src={marvel[index]}/>
                   <div><button onClick={() => clearNames(name.id)}>REMOVE</button></div>
                </div>
                
                </>
               
                
            )
        }

    })



    return (
        <div>
            <br></br>
            <div id="buttons">
            <button onClick={mix}>SPIN</button>
            <button onClick={clearAll}>CLEAR</button>
            </div>

            { showWinner ? <div id="winner-div"><h1 id="winner">{winner}</h1> </div>: null}
            <div className='all-names'>
            {returnNames}
            </div>
          
        </div>
    )
  
}

export default Spinner;
