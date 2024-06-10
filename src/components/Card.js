import Image from 'next/image';
import Link from 'next/link';

export default function Card({ imgSrc, title, link }) {
  return (
    <div className="bg-black text-white shadow-lg rounded-lg p-4 mb-4 transform transition duration-500 hover:scale-105">
      <div className="flex justify-center">
        <Image src={imgSrc} alt={title} width={500} height={200} className="rounded-t-lg" />
      </div>
      <h2 className="text-2xl font-bold my-2 text-center">{title}</h2>
      <div className="flex justify-center">
        <Link href={link}>
          <span className="text-neonPink hover:text-neonGreen" target="_blank" rel="noopener noreferrer">Ver mais</span>
        </Link>
      </div>
    </div>
  );
}
