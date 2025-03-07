import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (<nav className='w-full fixed top-0 '>
            <ul className='flex justify-around w-screen '>
            <li >
                <button className=' bg-linear-to-r  from-indigo-500  to-pink-500 bg-transparent ' onClick={() => navigate('/')}>Home</button>
            </li>
            <li>
                <button className=' bg-linear-to-r from-indigo-600 to-pink-500  text-white' onClick={() => navigate('/about')}>About</button>
            </li>
            <li>
                <button className=' bg-linear-to-r from-indigo-600 to-pink-500  text-white' onClick={() => navigate('/contact')}>Contact</button>
            </li>
        </ul>
        </nav >
    )
}

export default Navbar