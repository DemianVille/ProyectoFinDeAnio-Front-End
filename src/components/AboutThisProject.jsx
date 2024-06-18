import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutThisProject() {
  return (
    <button className='aboutUsBtn py-1 px-2'><Link to={"/about-this-project"} className='aboutUsLink'>Sobre este proyecto</Link></button>
  )
}
