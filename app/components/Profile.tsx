import Image from 'next/image';

export default function Profile() {
  return (
    <section className="w-full py-4 pl-10 mx-auto h-40 flex gap-4 items-center">
      <Image
        className="drop-shadow-xl shadow-xl rounded-full"
        src="/images/profile.png"
        width={100}
        height={100}
        alt="Jiyoung Choi"
        priority={true}
      />
      <div className=" w-100 h-fit">
        <h2 className="text-2xl font-extrabold">최지영</h2>
        <strong> From Bugs to Breakthroughs </strong> <br />
        프론트엔드 개발과 관련된 기술을 학습하고, 프로젝트를 진행하면서 마주한 버그들과 이슈를 해결한 것을 기록합니다.
      </div>
    </section>
  );
}
