import React from 'react'
import {UserButton} from '@clerk/nextjs'
import Sidebar from '@/components/shared/Sidebar'



const Home = () => {
  return (
    <div>
      <Sidebar />
      <p>Home</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Home