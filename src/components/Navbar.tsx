import React from 'react';
import Logo from '../assets/logo.webp';

const navLinks = [
    { href: '#welcome', label: 'Inicio' },
    { href: '#biography', label: 'Biografia' },
    { href: '#santification', label: 'Santificación' },
    { href: '#beatification', label: 'Beatificación' },
    { href: '#legacy', label: 'Legado' },
    { href: '#prayer', label: 'Oración' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-[#121212] bg-opacity-80 backdrop-blur-md">{/* persistent top bar */}
            <div className="relative flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center space-x-2">
                    <a href="#welcome" className="flex items-center space-x-2">
                        <img src={Logo} alt="Logo" className="w-12 rounded-full object-cover" />
                        <span className="font-semibold text-lg text-white whitespace-nowrap">José Gregorio Hernández</span>
                    </a>
                </div>

                <button
                    type="button"
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                    onClick={handleToggle}
                    className="lg:hidden text-white p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-white/40"
                >
                    <span className="sr-only">Abrir menú</span>
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5" />
                        )}
                    </svg>
                </button>

                <ul
                    className={`flex flex-col space-y-3 absolute left-0 right-0 top-full bg-[#121212] bg-opacity-95 backdrop-blur-md px-6 py-4 transition-all duration-200
                        ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
                        lg:relative lg:top-auto lg:left-auto lg:right-auto lg:flex-row lg:space-y-0 lg:space-x-4 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:transition-none
                    `}
                >
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className="md:py-0">
                            <a
                                href={href}
                                className="block text-white hover:text-gray-300 transition-colors"
                                onClick={handleLinkClick}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;