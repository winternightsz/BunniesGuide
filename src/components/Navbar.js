import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white font-bold text-xl">Logo</a>
        </Link>
        <div className="space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-white">Home</a>
          </Link>
          <Link href="/mvs" legacyBehavior>
            <a className="text-white">Mvs</a>
          </Link>
          <Link href="/dancep" legacyBehavior>
            <a className="text-white">DanceP</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
