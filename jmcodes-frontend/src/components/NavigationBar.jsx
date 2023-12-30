import React from 'react'
import {
    HomeIcon,
    IdentificationIcon
} from '@heroicons/react/24/solid'  

function NavigationBar() {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <div className='flex flex-row p-5 bg-slate-500 text-white' >
            {/*  Add logo Here*/}
            <span className='font-bold text-2xl'> JM</span><span className='text-2xl'>CODES [Blog]</span>
            {/*  Add Home Here*/}
            <div className='flex content-center'>
                <HomeIcon className='h-7 w-7 ml-5' />
                <span>Home</span>
            </div>
            {/*  Add About me Here*/}
            <div className='flex content-center'>
                <IdentificationIcon className="h-7 w-7 ml-5" />
                <span>About Us</span>
            </div>
            {/*  Add Search Bar Here*/}
            <div className='ml-16'>
                <input type="search" placeholder="Search" className='rounded-md pl-4' />
            </div>
        </div>
    </div>
  )
}

export default NavigationBar
