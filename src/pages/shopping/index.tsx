import ShopItem from '@/components/listitem/ShopItem';
import ShopButton from '@/components/navigation/ShopButton';
import MainLayout from '@/layouts/MainLayout';
import {
  AllShopItem,
  BartenderItem,
  ItemData,
  WineItem,
} from '@/placeholder_data';
import { AnimatePresence } from 'framer-motion';
import React, { ChangeEvent, ReactElement, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { NextPageWithLayout } from '../_app';

const Shopping: NextPageWithLayout = () => {
  const [shopItem, setShopItem] = useState<ItemData[]>(WineItem);
  const [tab, setTab] = useState<number>(1);

  const ChooseTab = (value: number, items: ItemData[]) => {
    setTab(value);
    setShopItem(items);
  };

  const onFindChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setShopItem(tab === 1 ? WineItem : BartenderItem);
      return;
    }

    const rs = AllShopItem.filter((e) => e.name.includes(event.target.value));
    setShopItem(rs);
  };

  return (
    <AnimatePresence>
      <div className="flex h-screen flex-1">
        <div className="flex flex-1 flex-col pt-12">
          <div className="flex flex-row">
            <div className="w-72" />
            <div className="flex flex-1 flex-row ">
              <h1 className={`font-advent text-3xl`}>Find Your Product</h1>

              <div className="relative ml-32 flex">
                <input className="w-96 p-1" onChange={onFindChange} />
                <FiSearch className="absolute top-2 right-2" size={20} />
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-1 flex-row">
            <div className="flex w-72 flex-col gap-3 px-5">
              <ShopButton
                content="Rượu nền"
                isChoosed={tab === 1}
                onClick={() => ChooseTab(1, WineItem)}
              />
              <ShopButton
                content="Dụng cụ"
                isChoosed={tab === 2}
                onClick={() => ChooseTab(2, BartenderItem)}
              />
            </div>
            <div
              style={{ borderWidth: '1px 0 0 1px' }}
              className="grid flex-1 grid-cols-4 overflow-y-scroll px-5 pt-3"
            >
              {shopItem.map((item) => (
                <ShopItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

Shopping.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Shopping;
