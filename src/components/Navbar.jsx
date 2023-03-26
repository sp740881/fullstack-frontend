import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
  <Link to="/">Home</Link>
  <Link to="/login">login</Link>
  <Link to="/signup">signup</Link>
  <Link to="/notes">notes</Link>
  </>
}

export default Navbar