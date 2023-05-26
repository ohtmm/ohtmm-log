import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose h-8 prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold flex gap-4 place-content-center'>
          <Link
            href='/'
            className='text-black/80 font-bold no-underline hover:text-black'
          >
            ∅htmm
          </Link>
        </h1>

        <div className='flex flex-row justify-center gap-4 items-center align-middle text-4xl lg:text-5xl'>
          <Image
            className='border-1 border-black drop-shadow-xl shadow-xl rounded-full mx-auto'
            src='/images/profile.png'
            width={50}
            height={50}
            alt='Jiyoung Choi'
            priority={true}
          />
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
