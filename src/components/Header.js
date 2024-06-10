import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Esquerda */}
        <Navbar />

        {/* Centro */}
        <div className="flex justify-center items-center flex-1">
          <Image
            src="/logo.png" // Substitua pelo caminho correto da logo da banda
            alt="Logo da Banda"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Direita */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
