import React, { useState }from "react"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom"
import validator from "validator"
import Thanks from "./ThankYou"
import "../styles/base.css"

function Form(props) {  
  const [name, setName] = useState("")  
  const [nameError, setNameError] = useState("")  
  const [email, setEmail] = useState("")  
  const [emailError, setEmailError] = useState("")  
  const [userName, setUserName] = useState("")  
  const [userNameError, setUserNameError] = useState("")  
  const [password, setPassword] = useState("")  
  const [passwordError, setPasswordError] = useState("")  
  const [confirmPwd, setPwd] = useState("")  
  const [confirmPwdError, setPwdError] = useState("")  
  const [web, setWeb] = useState("") 
 const [webError, setWebError] = useState("")

function handleSubmit(e){
  e.preventDefault()
  let err=false


    if (name===""){
      err=true
      setNameError("- cannot be blank")
    }else{
      if (validator.isAlpha(name))
      {
        setNameError("")
      }else{
        err=true
        setNameError("- characters not allowed")

      }
    }

    if (email===""){
      err=true
      setEmailError("- cannot be blank")
    }else{
      if (validator.isEmail(email))
      {
        setEmailError("")
      }else{
        err=true
        setEmailError("- Must enter a valid email")
      }
    }

    if (userName===""){
      err=true
      setUserNameError("- cannot be blank")
    }else{
      setUserNameError("")
    }

    if (password===""){
      err=true
      setPasswordError("- cannot be blank")
    }else{
      setPasswordError("")
    }

    if (confirmPwd===""){
      err=true
      setPwdError("- cannot be blank")
    }else{
      if (confirmPwd!=password)
      {
        err=true
        setPwdError("- must match password")

      }else{
      setPwdError("")
      }
    }

    if (web===""){
      err=true
      setWebError("- cannot be blank")
    }else{
      if(validator.isURL(web))
      {
        setWebError("")

      }else
      {
        err=true
        setWebError("- Must enter a valid url")

      }

    }


if (err==false)
{
    props.history.push("/thanks")
}






}


  return (    
<div className="form">    
  <h2>Profile Form - All fields required</h2>  
  <form onSubmit={handleSubmit}>        
      <label className={nameError==""? "":"error"}>Name {nameError}</label>        
      <input className="" onChange={e=> setName(e.target.value)}placeholder="Name" type="text"/>         
      <label className={emailError==""? "":"error"}>Email {emailError}</label>        
      <input className="" onChange={e=> setEmail(e.target.value)}placeholder="Email" type="email"/>         
      <label className={userNameError==""? "":"error"}> Username {userNameError}</label>        
      <input className="" onChange={e=> setUserName(e.target.value)}placeholder="Username" type="text"/>         
      <label className={passwordError==""? "":"error"}>Password {passwordError}</label>        
      <input className="" onChange={e=> setPassword(e.target.value)}placeholder="Password" type="password"/>         
      <label className={confirmPwdError==""? "":"error"}>Confirm Password{confirmPwdError}</label>        
      <input className="" onChange={e=> setPwd(e.target.value)} placeholder="Confirm Password" type="password"/>         
      <label className={webError==""? "":"error"}>Website {webError}</label>        
      <input className="" onChange={e=> setWeb(e.target.value)} placeholder="Website" type="url" value={web}/>         
    <button className="btn" type="submit">submit</button>
  </form>   
</div>  

)}
export default Form