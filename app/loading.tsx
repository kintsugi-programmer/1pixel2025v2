import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (<div className="relative flex flex-col items-center justify-center h-screen" >
    <div className="relative flex items-center justify-center">
      <div>
        <Image
          src="/Hero/Vector.svg"
          alt="hcd logo"
          width={200}
          height={100}
          className="animate-spin-slow"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="absolute">
        <Image
          src="/Hero/Group 11524.svg"
          alt="hcd logo"
          width={125}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
     
    </div> <div className='py-5 font-bold text-xl text-[#FFF6E1]'>Good Things Take Time <br />- 1Px Descon Team 🩷</div>
    </div>
  );
};

export default Loading;
