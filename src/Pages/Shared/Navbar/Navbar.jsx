import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="navbar  bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-slate-400 dropdown-content mt-3 z-[1] p-2 shadow h-96 w-52">
                            <li>Sidebar</li>
                            <li>
                                <a className='bg-white rounded-none'>Item 1</a>
                                <ul className="p-2 text-center ">
                                    <li className='mt-2 bg-zinc-400 '><a>Item A</a></li>
                                    <li className='mt-2 bg-zinc-400'><a>Item B</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className='bg-white rounded-none '>Item 2</a>
                            </li>
                            <li className='mt-2'><a className='bg-white rounded-none '>Item 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-slate-400 dropdown-content  z-[1]  shadow h-96 w-52">
                            <li>Sidebar</li>
                            <li>Sidebar</li>
                            <li>Sidebar</li>
                            
                            {/* <li>
                                <a className='bg-white rounded-none '>Item 2</a>
                            </li>
                            <li className='mt-2'><a className='bg-white rounded-none '>Item 3</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center -mx-32 hidden lg:flex">
                    <ul className="menu menu-horizontal  text-white ">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;