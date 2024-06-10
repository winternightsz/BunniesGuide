import Image from 'next/image';
import Link from 'next/link';

export default function Card({ imgSrc, title, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <Image src={imgSrc} alt={title} width={300} height={200} className="rounded-t-lg" />
      <h2 className="text-xl font-bold my-2">{title}</h2>
      <Link href={link} passHref>
        <span className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Ver mais</span>
      </Link>
    </div>
  );
}
