import React, { useRef } from "react";
// import signupDiv from "./signupage";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { Link, } from "react-router-dom";
import { useState } from "react";
import Yes from "./userdashboard";
import { Array1 } from "./signupage";


const Logdiv=()=>{
    const styleLoginDiv ={
        height : "200px",
        width : "300px",
        border : "2px solid black",
        position : "relative",
        top : "300px",
        left : "100px",
        textAlign :"center",
        padding : "10px",
    }
    
    function Checking(){
        var usernamedata = document.getElementById("usernameid").value
        var passworddata = document.getElementById("passwordid").value

        if(usernamedata==="" && passworddata===""){
            alert("input is empty");
            
        }
        

        for(let x=0; x<Array1.length; x++){
            if(usernamedata===Array1[x][0]){
                if(passworddata===Array1[x][1]){
                    alert("succues")
                }else{
                    alert("incorrect password")
                }
                
            }
           
        }
        
    }

    return(
                
        <div style={styleLoginDiv}>
            
            <h4 style={{color : "red",textDecoration:"underline"}}>Login to GAME-TD</h4>
            <label>
                username: <input id="usernameid" type={"text"}/>
                password : <input id="passwordid" type={"password"}/><br />
                <span style={{visibility:"hidden"}}>thththhtth</span><button onClick={Checking}>signin</button><button>signup</button>
            </label><br/><br/>
            
            <p><span style={{visibility:"hidden"}}>thfsfsfs</span>forgoten password: <Link to="/SignupDiv">email</Link></p>
        </div>
        
    )
}
export default Logdiv

