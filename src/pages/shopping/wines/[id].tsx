import ShopItem from '@/components/listitem/ShopItem';
import ShopButton from '@/components/navigation/ShopButton';
import MainLayout from '@/layouts/MainLayout';
import { ItemData, WineItem } from '@/placeholder_data';
import { AnimatePresence } from 'framer-motion';
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/navigation';
import { ParsedUrlQuery } from 'querystring';
import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { NextPageWithLayout } from '../../_app';

export async function getServerSideProps({
  query,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  query: ParsedUrlQuery;
}) {
  const id = query.id as string;
  const items = WineItem.filter((e) => e.type_of_wine === id);
  const choosed = dict[id];

  return {
    props: {
      items,
      choosed,
    },
  };
}

const dict: { [key: string]: number } = {
  Whisky: 1,
  Cogna: 2,
  Vodka: 3,
  Champagne: 4,
};

type Props = { items: ItemData[]; choosed: number };

const TypeOfWines: NextPageWithLayout<Props> = ({ items, choosed }) => {
  const router = useRouter();
  const originItems = items;
  const [shopItem, setShopItem] = useState<ItemData[]>(originItems);

  useEffect(() => {
    setShopItem(items);
  }, [items]);

  if (items.length === 0) {
    return <div>WrongPage</div>;
  }

  const onFindChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setShopItem(originItems);
      return;
    }

    const rs = originItems.filter((e) =>
      e.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );
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
                isChoosed={true}
                onClick={() => router.push('/shopping/wines')}
              />
              <div className="ml-10 flex flex-col gap-2">
                <ShopButton
                  content="Whisky"
                  isChoosed={choosed === 1}
                  isSmall={true}
                  onClick={() => router.push('/shopping/wines/Whisky')}
                />
                <ShopButton
                  content="Cogna"
                  isChoosed={choosed === 2}
                  isSmall={true}
                  onClick={() => router.push('/shopping/wines/Cogna')}
                />
                <ShopButton
                  content="Vodka"
                  isChoosed={choosed === 3}
                  isSmall={true}
                  onClick={() => router.push('/shopping/wines/Vodka')}
                />
                <ShopButton
                  content="Champagne"
                  isChoosed={choosed === 4}
                  isSmall={true}
                  onClick={() => router.push('/shopping/wines/Champagne')}
                />
              </div>
              <ShopButton
                content="Dụng cụ"
                isChoosed={false}
                onClick={() => router.push('/shopping/equiments')}
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

TypeOfWines.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default TypeOfWines;
