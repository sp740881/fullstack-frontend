import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [data,setData]=useState({
        name:"",
    pass:"",
   
    })
        const InputHadler=(e)=>{
            // console.log(e.target.value,e.target.name)
            setData({...data,[e.target.name]:e.target.value})
          
        }
        const Handlesubmit=(e)=>{
            e.preventDefault()
            Login(data)
            
        }
        const{name,pass}=data
        const Login=async(obj)=>{
         try {
            const res= await axios.post("https://lovely-goat-earmuffs.cyclic.app/user/login",obj)
            if(res.status==200){
                console.log(res.data)
                localStorage.setItem("token",res.data)
            }
         } catch (error) {
            console.log(error)
         }
        }  
  return <>
  <h4>login</h4>
  <form onSubmit={Handlesubmit}>
    <label>name</label>
    <input placeholder='name' type="text" name="name"  value={name} onChange={InputHadler}/>
    <label>pass</label>
    <input placeholder='pass' type="password" name="pass" value={pass} onChange={InputHadler}/>
    <button type='submit'>Login</button>
  </form>
  </>
}
export default Login