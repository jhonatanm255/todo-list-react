import React from 'react'
import persona1 from '../assets/persona1.png'

function Navbar() {
  return (
    // CONTENT
    <div className='w-full flex justify-between py-4 px-8 bg-white shadow-lg'>
        {/* LOGO */}
        <i class="text-4xl text-slate-700 bx bx-layer"></i>

        {/* MENU */}
        <div>
            <ul className='flex my-1 gap-2 text-md text-blue-700 font-semibold cursor-pointer'>
                <li>Home</li>
                <li>Price</li>
                <li>Option</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* USER */}
        <img className='w-10 rounded-full' src={persona1} alt="logo-persona" />
    </div>
  );
}

export default Navbar

