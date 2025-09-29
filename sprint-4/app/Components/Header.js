import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen((open) => !open);
    }
    return (
        <header className="w-full flex justify-between items-center py-5 px-10 md:px-20 lg:px-56 font-corpo">
            <img src="/Logo-branca.png" alt="Logo Passa Bola Branca"/>
            <nav className="hidden md:block ml-auto">
                <ul className="flex gap-7 md:gap-10 text-lg text-white whitespace-nowrap">
                    <li>
                        <Link className="hover:text-green duration-300" href="./pages/loginPerfil.html">Login</Link>
                    </li>
                    <li>
                        <Link className="hover:text-green duration-300"
                            href="./pages/cadastreSePerfil.html">Cadastre-se</Link>
                    </li>
                    <li>
                        <Link className="hover:text-green duration-300" href="./pages/copasPab.html">Copas PAB</Link>
                    </li>
                    <li>
                        <Link className="hover:text-green duration-300" href="index.html">Início</Link>
                    </li>
                </ul>
            </nav>
            <div className="md:hidden flex items-center justify-center relative">
                <button className="flex items-center justify-center p-2 rounded focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <nav id="mobile-menu"
                    className={`absolute left-1/2 -translate-x-1/2 top-12 w-[90vw] max-w-xs bg-white rounded-xl shadow-lg z-50 ${menuOpen ? '' : 'hidden'}`}>
                    <ul className="flex flex-col gap-4 py-6 px-8 text-lg">
                        <li><Link className="text-pink font-bold" href="./pages/loginPerfil.html">Login</Link></li>
                        <li><Link className="text-pink font-bold" href="./pages/cadastreSePerfil.html">Cadastre-se</Link></li>
                        <li><Link className="text-pink font-bold" href="./pages/copasPab.html">Copas PAB</Link></li>
                        <li><Link className="text-pink font-bold" href="index.html">Início</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}