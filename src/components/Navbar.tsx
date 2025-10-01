import React from 'react';
import Logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className='w-full flex flex-row justify-between items-center fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-md py-2'>
                <div className='flex items-center space-x-2 ml-4'>
                    <img src={Logo} alt="Logo" className='w-12 rounded-full object-cover' />
                    <span className='font-semibold text-lg'>José Gregorio Hernández</span>
                </div>

                 <ul className="flex space-x-4 mr-4">
                    <li><a href="#welcome" className="text-white hover:text-gray-400">Inicio</a></li>
                    <li><a href="#biography" className="text-white hover:text-gray-400">Biografia</a></li>
                    <li><a href="#beatification" className="text-white hover:text-gray-400">Beatificación</a></li>
                    <li><a href="#legacy" className="text-white hover:text-gray-400">Legado</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;