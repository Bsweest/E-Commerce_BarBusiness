import { ItemData } from '@/placeholder_data';
import NumberFormat from '@/utils/PriceFormat';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  data: ItemData;
};

const ShopItem = ({ data }: Props) => {
  const router = useRouter();

  const goToDetail = () => {
    router.push(`/shopping/${data.name}`);
  };

  return (
    <div className="mb-3 flex h-fit flex-col items-center justify-center">
      <div
        className="flex cursor-pointer flex-col items-center bg-neutral-900 p-2"
        onClick={goToDetail}
      >
        <div className="relative m-2 h-52 w-52 overflow-clip">
          <Image src={data.url} alt="wine" fill className="hover:scale-125" />
        </div>
        <div className="flex w-full text-orange-200">
          <div className={`mx-3 font-advent text-xl`}>{data.name}</div>
        </div>
        <div className="flex w-full justify-end">
          <div className={`mx-3 font-advent text-xl`}>
            {NumberFormat(data.price) + '.000 đ'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
