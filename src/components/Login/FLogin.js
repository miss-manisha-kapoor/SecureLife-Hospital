import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css";

function Home() {
  return (
    <div>
      
        <div className="login">
        
            <label for="Username"> Username  </label>
                <input  name="Username"type="text"  placeholder='Enter your Username or Number'/>
              
               
                <label for="Password"> Password  </label>
                <input type="password" placeholder='Enter your Password' />
              <br/>
                <Button >Login</Button>
              <button>Sign Up</button>
            </div>
          </div>
   
  )
}
export default Home