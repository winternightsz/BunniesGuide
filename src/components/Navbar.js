"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span className={`px-3 py-2 rounded ${isActive ? 'bg-neonBlue text-white' : 'hover:bg-neonGreen text-white'}`}>
        {children}
      </span>
    </Link>
  );
};

const Navbar = ({ isHomePage }) => {
  return (
    <header className={`${isHomePage === 'sim' ? 'bg-transparent' : 'bg-gray-800'} text-white p-4`}>
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
            <a href="/">Home</a>
            <a href="/Mvs">Mvs</a>
            <a href="/DanceP">Dance Practices</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;