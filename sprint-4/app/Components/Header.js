
import Link from "next/link";
import { useState } from "react";

export default function Header({ links = [], bgClass = "", src="", color="" }) {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen((open) => !open);
    }
    return (
        <header className={`w-tamanho flex justify-between items-center py-5 px-10 md:px-20 lg:px-56 font-corpo ${bgClass}`}>
            <img src={src} alt="Logo Passa Bola Branca"/>
            <nav className="hidden md:block ml-auto">
                <ul className={`flex gap-7 md:gap-10 text-lg ${color} whitespace-nowrap`}>
                    {links.map(link => (
                        <li key={link.href}>
                            <Link className="hover:text-green duration-300" href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="md:hidden flex items-center justify-center relative">
                <button className="flex items-center justify-center p-2 rounded focus:outline-none" onClick={toggleMenu}>
                    <svg className={`w-8 h-8 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <nav id="mobile-menu"
                    className={`absolute left-1/2 -translate-x-1/2 top-12 w-[90vw] max-w-xs bg-white rounded-xl shadow-lg z-50 ${menuOpen ? '' : 'hidden'}`}>
                    <ul className="flex flex-col gap-4 py-6 px-8 text-lg">
                        {links.map(link => (
                            <li key={link.href}>
                                <Link className="text-pink font-bold" href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}