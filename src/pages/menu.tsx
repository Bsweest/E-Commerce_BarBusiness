import MenuGrid from '@/components/listitem/MenuGrid';
import MainLayout from '@/layouts/MainLayout';
import { DrinkMenu, FoodMenu } from '@/placeholder_data';
import { AnimatePresence } from 'framer-motion';
import { Dancing_Script } from 'next/font/google';
import React, { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';

const dancing = Dancing_Script({
  style: ['normal'],
  subsets: ['vietnamese'],
  weight: '500',
  display: 'swap',
});

const Menu: NextPageWithLayout = () => {
  return (
    <div className="relative flex h-full w-full flex-1 flex-col items-center p-9">
      <div className={`m-3 flex w-3/4 ${dancing.className}`}>
        <div className="flex w-full flex-1 flex-col items-center border-2 border-orange-200 px-5 text-4xl">
          <div>Menu</div>
          <div className="flex w-full justify-start text-3xl underline">
            Drinks:
          </div>

          <div className="grid grid-cols-12 font-advent">
            {DrinkMenu.map((item) => (
              <MenuGrid key={item.id} data={item} />
            ))}
          </div>

          <div className="mt-12 flex w-full justify-start text-3xl underline">
            For the Table:
          </div>

          <div className="grid grid-cols-12 font-advent">
            {FoodMenu.map((item) => (
              <MenuGrid key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Menu.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Menu;
