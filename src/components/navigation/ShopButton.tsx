import TailwindPrefix from '@/utils/TailwindPrefix';
import React from 'react';

type ShopButtonType = {
  content: string;
  isChoosed: boolean;
  onClick: Function;
  isSmall?: boolean;
};

const ShopButton = ({
  content,
  isChoosed,
  onClick,
  isSmall = false,
}: ShopButtonType) => {
  return (
    <div
      className={`group relative flex cursor-pointer ${
        isSmall ? 'h-8 text-sm' : 'h-10'
      }`}
      onClick={() => onClick()}
    >
      <div className="h-full w-full border-2 border-red-300" />
      <div
        className={`absolute -top-0 -left-0 flex h-full w-full flex-1 items-center justify-center border-2  text-lg group-hover:-top-2 group-hover:-left-2 
                    ${isChoosed ? 'border-orange-300' : 'border-white'}
                    ${TailwindPrefix('group-hover', 'border-orange-300')}`}
      >
        {content}
      </div>
    </div>
  );
};

export default ShopButton;
