import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold grid place-content-center'>
          <Link
            href='/'
            className='text-black/80 font-bold no-underline hover:text-black'
          >
            Log
          </Link>
        </h1>
        <div className='flex flex-rowl justify-center align-middle gap-4 text-4xl lg:text-5xl'>
          <Link
            className='text-black/80 hover:text-black'
            href='https://github.com/ohtmm'
            target='_blank'
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
