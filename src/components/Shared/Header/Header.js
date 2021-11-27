import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import main_logo from '../../../images/main_logo.png'
import useAuth from '../../../hooks/useAuth';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


const Header = () => {
    const { user, logOut } = useAuth();
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

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
                            to="/guides"
                            className="mr-5 hover:text-green-700">Guides</NavLink>
                        <Menu as="div" className="relative inline-block text-left mr-5">
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full rounded-md border-1 shadow-sm px-4 py-2 bg-yellow-200 text-sm font-medium text-gray-700 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Manage
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (

                                                <NavLink
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#48BB78"
                                                    }}
                                                    to="/addSpots"
                                                    className={classNames(
                                                        active ? 'bg-yellow-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Add  Spot
                                                </NavLink>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <NavLink
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#48BB78"
                                                    }}
                                                    to="/manageSpots"
                                                    className={classNames(
                                                        active ? 'bg-yellow-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Delete Spot
                                                </NavLink>
                                            )}
                                        </Menu.Item>
                                    </div>

                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu as="div" className="relative inline-block text-left mr-5">
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full rounded-md border-1 shadow-sm px-4 py-2 bg-yellow-200 text-sm font-medium text-gray-700 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Bookings
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                    <div className="py-1">

                                        <Menu.Item>
                                            {({ active }) => (
                                                <NavLink
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#48BB78"
                                                    }}
                                                    to="/myBookings"
                                                    className={classNames(
                                                        active ? 'bg-yellow-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    My Bookings
                                                </NavLink>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <NavLink
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#48BB78"
                                                    }}
                                                    to="/manageAllBooking"
                                                    className={classNames(
                                                        active ? 'bg-yellow-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Manage All Bookings
                                                </NavLink>
                                            )}
                                        </Menu.Item>
                                    </div>

                                </Menu.Items>
                            </Transition>
                        </Menu>
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

                    {
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

                        </NavLink>}


                </div>
            </header>
        </div>
    );
};

export default Header;