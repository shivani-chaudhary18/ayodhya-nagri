import React from 'react';

const Header = () => {
    return (
        <header className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
            <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8">
                <div className="text-7xl md:text-4xl font-extrabold text-orange-600 tracking-wide">
                    Ayodhya Nagri
                </div>
                <ul className="flex gap-10 text-gray-800 font-semibold text-lg md:text-xl">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
