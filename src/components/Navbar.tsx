import React from 'react';
import Logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className='w-full flex flex-row justify-between items-center'>
                <div className='flex items-center space-x-2 ml-4'>
                    <img src={Logo} alt="Logo" className='w-12 rounded-full object-cover' />
                    <span className='font-semibold text-lg'>José Gregorio Hernández</span>
                </div>

                 <ul className="flex space-x-4 mr-4">
                    <li><a href="/" className="text-white hover:text-gray-400">Inicio</a></li>
                    <li><a href="/about" className="text-white hover:text-gray-400">Biografia</a></li>
                    <li><a href="/contact" className="text-white hover:text-gray-400">Legado</a></li>
                    <li><a href="/childhood" className="text-white hover:text-gray-400">Beatificación</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;