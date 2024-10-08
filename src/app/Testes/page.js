// page.js (Home Page)
import Image from 'next/image';
import Link from 'next/link';

export default function HomeTest() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="w-full bg-[#e6eaf6] py-4 flex justify-between items-center px-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png" // substitua pelo caminho correto da imagem do logo
              alt="PassMinders Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold text-[#4e6bdf]">Pass<span className="text-[#a4b3f5]">Minders</span></h1>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="text-[#4e6bdf] ">
            Fazer login
          </Link>
          <Link href="/signup">
            <button className="bg-[#4e6bdf] text-white px-4 py-2 rounded-full hover:bg-[#3b54b5] transition">
              INSCREVA-SE
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl p-8">
        {/* Illustration */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/imagens/testsimagens/homeImagemGrande.png" // substitua pelo caminho correto da imagem
            alt="Illustration"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>

        {/* Welcome Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#4e6bdf] mb-4">
            Bem-Vindo ao <span className="text-black">PassMinders!</span>
          </h1>
          <p className="text-xl lg:text-2xl text-[#a4b3f5] mb-8">
            Seu gerenciador de logins e senhas confiável e intuitivo!
          </p>
          <Link href="#">
            <button className="bg-[#4e6bdf] text-white px-8 py-4 rounded-full text-lg lg:text-xl hover:bg-[#3b54b5] transition">
              INSCREVA-SE
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
