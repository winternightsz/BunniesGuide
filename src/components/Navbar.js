"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span className={`px-3 py-2 rounded ${isActive ? 'bg-chosenBlue text-white' : 'hover:bg-chosenBlueHover text-white acrotsrg'}`}>
        {children}
      </span>
    </Link>
  );
};

const Navbar = ({ isHomePage }) => {
  return (
    <header className={`${isHomePage === 'sim' ? 'bg-transparent' : 'bg-indigo-300'} text-white p-4`}>
      <div className="container mx-auto flex items-center">
        {/* Esquerda */}
        <div className="flex-shrink-0">
          <Image
            src="/imagens/logo.png" // Substitua pelo caminho correto da logo da banda
            alt="Logo da Banda"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Centro */}
        <div className="flex-grow flex justify-center">
          <nav className="flex space-x-6">
          <NavLink href="/">Home</NavLink>
            <NavLink href="/Mvs">Mvs</NavLink>
            <NavLink href="/DanceP">Dance Practices</NavLink>
            <NavLink href="/Testes">Testes</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;