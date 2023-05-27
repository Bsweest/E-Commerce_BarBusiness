import BoolCurrentDiv from '@/utils/BoolCurrentDir';
import { useRouter } from 'next/router';
import React from 'react';

type NavButtonType = {
  content: string;
  link: string;
};

const NavButton = ({ content, link }: NavButtonType) => {
  const router = useRouter();
  const isChoosed = BoolCurrentDiv(router.pathname, content);

  const onClick = () => {
    router.push(link);
  };

  return (
    <div
      className={`navbutton flex cursor-pointer flex-col items-center font-advent text-2xl text-orange-200`}
      onClick={onClick}
    >
      <div>{content}</div>
      <div className={`nav_underline ${isChoosed ? 'scale-100' : ''}`} />
    </div>
  );
};

export default NavButton;
