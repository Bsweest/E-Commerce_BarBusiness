import { CartItem } from '@/pages/payment';
import NumberFormat from '@/utils/PriceFormat';
import Image from 'next/image';
import React from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';

import { RemoveItemFromCart } from '../navigation/CartButon';

const PayItem = ({ data }: { data: CartItem }) => {
  const { item, count } = data;

  const remove = () => {
    RemoveItemFromCart(item.id);
  };

  return (
    <div
      key={item.id}
      className="group relative flex flex-row rounded-3xl bg-black"
    >
      <div className="relative h-32 w-32">
        <Image className="rounded-3xl" fill src={item.url} alt="item" />
      </div>
      <div className="mx-8 flex flex-1 flex-col p-1">
        <div className="font-advent text-2xl">{item.name}</div>
        <div className="font-advent text-xl">Số lượng: {count}</div>
        <div className="mb-3 flex flex-1 items-end justify-end">
          <div className="font-advent text-xl text-orange-200">
            Thành tiền: {NumberFormat(item.price * count)}.000 đ
          </div>
        </div>
      </div>

      <AiFillMinusCircle
        className="invisible absolute -top-2 -right-2 cursor-pointer rounded-full bg-white text-red-500 group-hover:visible"
        size={35}
        onClick={remove}
      />
    </div>
  );
};

export default PayItem;
