import ShopItem from '@/components/listitem/ShopItem';
import ShopButton from '@/components/navigation/ShopButton';
import MainLayout from '@/layouts/MainLayout';
import { WineItem } from '@/placeholder_data';
import React, { ReactElement } from 'react';
import { FiSearch } from 'react-icons/fi';

import { NextPageWithLayout } from '../_app';

const Shopping: NextPageWithLayout = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col pt-12">
        <div className="flex flex-row">
          <div className="w-72" />
          <div className="flex flex-1 flex-row ">
            <h1 className={`font-advent text-3xl`}>Find Your Product</h1>

            <div className="relative ml-32 flex">
              <input className="w-96 p-1"></input>
              <FiSearch className="absolute top-2 right-2" size={20} />
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-1 flex-row">
          <div className="flex w-72 flex-col gap-3 px-5">
            <ShopButton content="Rượu nền" link="/" />
            <ShopButton content="Dụng cụ" link="/" />
          </div>
          <div
            style={{ borderWidth: '1px 0 0 1px' }}
            className="grid flex-1 grid-cols-4 px-5 pt-3"
          >
            {WineItem.map((item) => (
              <ShopItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Shopping.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Shopping;
