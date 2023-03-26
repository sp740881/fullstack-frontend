import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Notes = () => {

const [data,setData]=useState([])

const fetctData=async()=>{
    const res=await axios.get("https://lovely-goat-earmuffs.cyclic.app/notes/",{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    setData(res.data)

}

useEffect(()=>{
    fetctData()
},[])
  return (
    <div>Notes</div>
  )
}

export default Notes