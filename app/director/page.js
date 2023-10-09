import Container from '@/components/Container';
import Title from '@/components/Title';
import Image from 'next/image';
import React from 'react';
import directorImg from 'public/bannerImg/director.jpg';

function DirectorPage() {
  return (
    <Container>
      <div className='flex flex-col gap-6 p-8'>
        <Title title={'代表者からのご挨拶'} />
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <p className='max-w-2xl'>
            親愛なるお客様、パートナー、そしてチームメンバーの皆様へ、
            私たちの成功の背後には、お客様と協力し、私たちのビジョンを共有してくださるパートナー、そして情熱的なチームメンバーがいます。これからもお客様に価値あるサービスを提供し、共に成長していくことを楽しみにしています。
          </p>
          <Image src={directorImg} alt="directorImg" className='w-52 rounded-2xl object-cover'/>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <p className='max-w-2xl'>
            パートナーシップの重要性:
            強力なパートナーシップが私たちの成長を支えています。お互いに学び、共に成功を築くことが私たちの信念です。新たな協力関係を築くことを楽しみにしています。
          </p>
          <p className='max-w-2xl'>
            チームメンバーへの感謝:
            私たちのチームメンバーは最も貴重な資産です。その情熱、専門知識、そして努力に感謝いたします。私たちはチームとして成長し、一緒に目標を達成します。
          </p>
        </div>
      </div>
    </Container>
  );
}

export default DirectorPage;
