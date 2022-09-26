import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/header/Logo.svg'

export default function NavBar1() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white  z-10 absolute top-0">
            <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <img className="md:hidden block" src={logo} />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#D00338E5]/90"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#D00338E5]/90"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-6 md:flex md:space-x-10 md:space-y-0">
                            <li className="text-secondary uppercase font-nunito font-semibold text-base">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-secondary uppercase font-nunito font-semibold text-base">
                            <Link to="/gallery">Gallery</Link>
                            </li>
                            <li className="hidden lg:block">
                              <Link to="/"> <img src={logo} /> </Link>
                            </li>
                            <li className="text-secondary uppercase font-nunito font-semibold text-base">
                            <Link to="/destination">Destination</Link>
                            </li>
                            <li className="text-secondary uppercase font-nunito font-semibold text-base">
                            <Link to="/about">About</Link>
                            </li>
                        </ul>

                       
                    </div>
                </div>
               
            </div>
        </nav>
    );
}