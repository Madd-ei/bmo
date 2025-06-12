import Image from 'next/image';
import React, { useState } from 'react';

export default function ImageSwapper() {
  const defaultImage = '/cat.png';
  const punchImage = '/cat_punch.png';
  const deadImage = '/cat_dead.png';

  const [playerImage, setPlayerImage] = useState(defaultImage);
  const [NPCImage, setNPCImage] = useState(defaultImage);

  const handleClick = () => {
    setPlayerImage(punchImage);
    setNPCImage(deadImage);
    setTimeout(() => {
      setPlayerImage(defaultImage);
      setNPCImage(defaultImage);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Image src={playerImage} alt="Swappable" width={256} height={256} id="cat1" className='cat' />
        <Image src={NPCImage} alt="Swappable" width={256} height={256} id="cat2" className='cat scale-x-[-1]' />
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            >
            <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
            />
            Punch
            </a>
        </div>
    </div>
  );
}
