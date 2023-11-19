import React from 'react'
import Sidebar from '../components/ui/Sidebar'
import { Outlet } from 'react-router-dom'

const LearningLayout = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <div className="w-full bg-white flex flex-1">
          <Sidebar />
          <div className="flex-1 mx-3 overflow-auto bg-white">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default LearningLayout