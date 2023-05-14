import Image from 'next/image';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 flex flex-col justify-center align-center gap-2 text-3xl text-center text-black'>

        <span className='whitespace-nowrap'>
          <strong>최지영</strong>
        </span>
        <span className='text-sm'> @ohtmm</span>
      </p>
    </main>
  );
}
