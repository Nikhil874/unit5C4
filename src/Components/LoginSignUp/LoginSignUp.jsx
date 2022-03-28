import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/Login/action";
export const LoginSignUp = () => {
  let navigate=useNavigate();
  let dispatch=useDispatch();
const [userdata,setUserdata]=useState({
name:"",
password:"",
location:"",
interests:[],
image:"",
})
const [loginData,setLoginData]=useState({
  name:"",
  password:""
})
const handleChange=(event)=>{
 const {id,value,type,checked}=event.target;
 if(type=="checkbox"&&checked==true){
   setUserdata({...userdata,[id]:[...userdata.interests,value]})
 }else{
   setUserdata({...userdata,[id]:value});
 }

}

const handleSubmit=(e)=>{
  e.preventDefault();
axios.post("http://localhost:8080/users",userdata).then((res)=>{
  console.log("registered")
})
}

const handleLoginChange=(event)=>{
  const {id,value}=event.target;
  setLoginData({...loginData,[id]:value});
}

const handleLoginSubmit=(e)=>{
  e.preventDefault();
  axios.get(" http://localhost:8080/users").then((res)=>{
    console.log("1")
res.data.filter((e)=>{
  console.log("2")
  console.log(loginData)
  if(e.name==loginData.name){
    console.log("3")
    if(e.password==loginData.password){
      dispatch(userLogin(e));
      return navigate("/")
    }
  }
})
  })
}




  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => {handleSubmit(e) }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          id="name"
          onChange={(event) => { handleChange(event)}}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          id="password"
          className="password"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <select value={""} id="location" className="location" onChange={(event) => { handleChange(event)}}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
        id="interests"
        value="technology"
          type="checkbox"
          className="technology"
          onChange={(event) => {handleChange(event) }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" value="food"  id="interests" onChange={(event) => { handleChange(event)}} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies"   id="interests"
        value="movies" onChange={(event) => { handleChange(event)}} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" 
          id="interests"
          value="culture" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>art</label>
        <input type="checkbox"
          id="interests"
          value="art"
        className="art" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" 
          id="interests"
          value="drama" className="drama" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>


      {/* login form----------------------------> */}
      <form className="login" onSubmit={(e) => {handleLoginSubmit(e) }}>
        <h1>Login</h1>
        <label>name</label>
        <input
        id="name"
          type="text"
          className="name"
          onChange={(event) => { handleLoginChange(event)}}
          required
        />
        <br />
        <label>password</label>
        <input
        id="password"
          type="text"
          className="password"
          onChange={(event) => {handleLoginChange(event) }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
