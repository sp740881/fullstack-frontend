import React, { useState } from 'react'
import axios from 'axios';
export const Signup = () => {
const [data,setData]=useState({
    name:"",
age:0,
phone:0,
pass:"",
location:""
})
    const InputHadler=(e)=>{
        // console.log(e.target.value,e.target.name)
        setData({...data,[e.target.name]:e.target.value})
      
    }
    const Handlesubmit=(e)=>{
        e.preventDefault()
        Registaion(data)
        
    }
    const Registaion=async(obj)=>{
     try {
        const res= await axios.post("https://lovely-goat-earmuffs.cyclic.app/user/registation",obj)
        if(res.status==200){
            console.log(res.data)
        }
     } catch (error) {
        console.log(error)
     }
    }  

     const {name,age,phone,pass,location}=data
  return <>
  <h4>registation</h4>
  <form onSubmit={Handlesubmit}>
    <label>name</label>
    <input placeholder='name' type="text" name="name"  value={name} onChange={InputHadler}/>
    <label>age</label>
    <input placeholder='age'type="text" name="age"  value={age} onChange={InputHadler}/>
    <label>phone</label>
    <input placeholder='phone'type="text" name="phone" value={phone} onChange={InputHadler}/>
    <label>pass</label>
    <input placeholder='pass' type="password" name="pass" value={pass} onChange={InputHadler}/>
    <label>location</label>
    <input placeholder='location' type="text" name="location" value={location} onChange={InputHadler}/>
    <button type='submit'>submit</button>
  </form>
  </>
}
