import React from 'react';
import { NavLink } from 'react-router-dom';
import main_logo from '../../../images/main_logo.png'
// import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
    // const { user, logOut } = useAuth();

    return (
        <div className="sticky top-0 z-50"	>
            <header className="text-gray-600 body-font bg-yellow-200  bg-texture">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={main_logo} alt="" />
                        <NavLink to="/home"><span className="ml-3 text-xl text-green-900">Picnic Planner</span></NavLink>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-gray-700 justify-center">
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/spots"
                            className="mr-5 hover:text-green-700">Picnic Spot</NavLink>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/doctors"
                            className="mr-5 hover:text-green-700">Guides</NavLink>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/about"
                            className="mr-5 hover:text-green-700">About Us</NavLink>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#48BB78"
                            }}
                            to="/contact"
                            className="mr-5 hover:text-green-700">Contact</NavLink>
                    </nav>

                    {/* {
                        user?.email && <span>
                            <NavLink to="/profile" className="mr-5 text-blue-600 font-bold"> {user?.name} </NavLink>
                        </span>
                    }

                    {user?.email ?

                        <button onClick={logOut} variant="light" className="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-white mt-4 md:mt-0">Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button> :
                        <NavLink to="/login" className="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-white mt-4 md:mt-0">Login

                        </NavLink>} */}


                </div>
            </header>
        </div>
    );
};

export default Header;