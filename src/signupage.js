import React from "react";
// import { useHistory } from 'react-router-dom';

var offwidth = document.getElementById("table-responsiveness").offsetWidth;
var offheight = document.getElementById("table-responsiveness").offsetHeight;
let form;
function SignupDiv(){

  const stylesignupDiv={
    height : "465px",
    width : "350px",
    // border : "2px solid black",
    position : "relative",
    top : offheight+50,
    left : (offwidth/2)-175,
    textAlign :"center",
    padding : "10px"
  }


  form = document.getElementById('form');

  return (
    <>
      <table className="talbe" style={stylesignupDiv}>
        <thead>
          <tr><th style={{color:"red", textDecoration:"underline"}}><h4>Create account in GAME-TD</h4></th></tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <form id="form" className="needs-validation col-auto">
                First Name: <input id="firstname" name="firstname" style={{width:"170px"}} required/><br /><br />
                Last Name: <input id="lastname" style={{width:"170px"}} required/><br /><br />
                DOB: <input id="DOB" type="date" data-date-format="DD MMMM YYYY" style={{width:"120px"}} required/>
                gender: <select name="gender" id="gender" required>
                          <option value=""></option>
                          <option value="M">M</option>
                          <option value="F">F</option>
                          <option value="T">T</option>
                        </select><br /><br />
                Email: <input id="email" type={"email"} style={{width:"210px"}} required/><br /><br />
                Username: <input id="username" style={{width:"170px"}} required/><br /><br />
                password : <input id="password" type={"password"} style={{width:"175px"}} required/><br /><br />
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label class="form-check-label" for="invalidCheck"><small>Agree terms and conditions </small><p></p></label>
                <div style={{textAlign:"right"}}><button className="btn btn-success" type={"submit"} id={"btn"} onClick={Creating}>Create</button></div>
                </form>
            </td>
          </tr>
        </tbody>  
      </table> 
    </>
  )
}


let persons = [
  {
  firstname: "naveen",
  lastname: "lastname",
  DOB: "DOB",
  gender:"gender",
  email: "email",
  username: "naveen",
  password: "12",
  },
  {
  firstname: "naveen",
  lastname: "lastname",
  DOB: "DOB",
  gender:"gender",
  email: "email",
  username: "navya",
  password: "123",
  },
];

function Creating(){

    // var firstname = document.getElementById("firstname").value
    // console.log(firstname)
    let kothaDhi = {
    firstname : "naveen",
    lastname  : "doddi",
    DOB : 1111111,
    gender : "M",
    email : "prasadnaveen@123",
    username : "n",
    password : "n"
  }

    kothaDhi = JSON.stringify(kothaDhi)
    fetch("database.json", {
      method: "POST",
      body: kothaDhi,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())

      // .then(rrr());
      .then((data)=>console.log(data))
    
  // persons.push(kothaDhi)
  
}
// Creating(persons)
function go(){
  // Creating(persons)
  const form = document.getElementById('form');
    const firstname = form.elements.firstname.value;
    const lastname = form.elements.lastname.value;
    const DOB = form.elements.DOB.value;
    const gender = form.elements.gender.value;
    const email = form.elements.email.value;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
  let kothaDhi = {
    firstname : firstname,
    lastname  : lastname,
    DOB : DOB,
    gender : gender,
    email : email,
    username : username,
    password : password
  }
  console.log(persons)
  persons.push(kothaDhi)
  console.log(persons)
  window.location.pathname = "/"
  
    
}

export { persons }
export default SignupDiv

