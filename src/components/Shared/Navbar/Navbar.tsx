import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = ["Home", "Trending", "Most Popular", "About"];

    return (
        <nav className="bg-transparent sticky w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                <div className="flex justify-between h-[9vh] items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-indigo-600">Reakto</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link}
                                to={`${link.toLowerCase().replace(/\s/g, '-')}`}
                                className="text-black text-sm hover:text-indigo-600 font-medium transition duration-400"
                            >
                                {link}
                            </Link>
                        ))}
                        <div>
                            <SignedOut>
                                <Link to="/login" className="text-white bg-indigo-600 text-sm hover:text-indigo-600 hover:bg-white py-1.5 px-3 rounded-2xl font-medium transition duration-400">Login</Link>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black hover:text-indigo-600 focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Transition */}
            <div
                className={clsx(
                    `md:hidden overflow-hidden transition-all duration-500 ease-in-out`,
                    isOpen ? "h-[91vh] opacity-100 " : "max-h-0 opacity-0"
                )}
            >
                <div className="bg-transparent flex flex-col items-center h-full justify-center space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            to={`${link.toLowerCase().replace(/\s/g, '-')}`}
                            className="block text-black text-sm hover:text-indigo-600 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link}
                        </Link>
                    ))}
                    <div>
                        <SignedOut>
                            <Link to="/login" className="text-white bg-indigo-600 text-sm hover:text-indigo-600 hover:bg-white py-1.5 px-3 rounded-2xl font-medium transition duration-400">Login</Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
