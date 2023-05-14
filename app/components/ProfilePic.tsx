import Image from 'next/image';

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='border-1 border-black drop-shadow-xl shadow-xl rounded-full mx-auto mt-8'
        src='/images/profile.png'
        width={200}
        height={200}
        alt='Jiyoung Choi'
        priority={true}
      />
    </section>
  );
}
