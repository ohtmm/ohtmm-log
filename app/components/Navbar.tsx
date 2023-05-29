import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="h-fit mx-auto flex justify-between items-center">
        <h1 className="text-3xl">
          <Link href="/" className="text-black font-bold no-underline hover:text-primary">
            ohtmm.log
          </Link>
        </h1>

        <div className="flex flex-row justify-center gap-4 items-center align-middle text-4xl lg:text-5xl">
          <Link
            className="text-4xl text-black/70 hover:text-primary/70"
            href="https://github.com/ohtmm"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
