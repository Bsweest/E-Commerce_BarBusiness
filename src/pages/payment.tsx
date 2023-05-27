import PayItem from '@/components/listitem/PayItem';
import { listCart } from '@/components/navigation/CartButon';
import MainLayout from '@/layouts/MainLayout';
import { BartenderItem, ItemData, WineItem } from '@/placeholder_data';
import NumberFormat from '@/utils/PriceFormat';
import { useSelector } from '@legendapp/state/react';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import { NextPageWithLayout } from './_app';

export type CartItem = {
  item: ItemData;
  count: number;
};

const FullItem = WineItem.concat(BartenderItem);

const Payment: NextPageWithLayout = () => {
  const [total, setTotal] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const cartToPay = useSelector(() => {
    const rs = listCart.list.get().map((item) => {
      const itemData = FullItem.filter((e) => e.id === item.itemID);
      const cartItem: CartItem = { item: itemData[0], count: item.count };
      return cartItem;
    });
    return rs;
  });

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    console.log(paymentMethod);
  };

  useEffect(() => {
    const sum = cartToPay.reduce(
      (prev, item) => prev + item.item.price * item.count,
      0,
    );
    setTotal(sum);
  }, [cartToPay]);

  return (
    <div className="flex h-full w-full flex-1 flex-row pt-9">
      <div className="flex w-3/5 flex-col items-center justify-center">
        <div className="font-advent text-2xl">Shopping Cart</div>
        <div className="my-2 flex h-full w-4/5 flex-col gap-3 overflow-y-scroll rounded-3xl bg-zinc-900 p-5">
          {cartToPay.map((element) => (
            <PayItem key={element.item.id} data={element} />
          ))}
        </div>
      </div>
      <div className="mt-9 flex flex-1 flex-col gap-3 font-advent">
        <div className="font-cabin text-3xl">
          Tổng cần phải trả:{' '}
          <span className="underline"> {NumberFormat(total)}.000 đ </span>
        </div>

        <div className="flex flex-row items-center font-cabin">
          <div className="">Địa Chỉ: </div>
          <input className="mx-5 flex-1 p-1 " />
        </div>

        <div className="font-cabin">Phương thức thanh toán:</div>
        <div className="flex w-full flex-col justify-start gap-3 px-10 font-cabin">
          <label
            htmlFor="cod"
            className="flex gap-5 rounded-md bg-zinc-900 p-2"
          >
            <input
              type="radio"
              id="cod"
              value="cod"
              name="payment_method"
              onChange={onRadioChange}
            />
            <div>Trả khi nhận hàng</div>
          </label>
          <label
            htmlFor="momo"
            className="flex gap-5 rounded-md bg-zinc-900 p-2"
          >
            <input
              type="radio"
              id="momo"
              value="momo"
              name="payment_method"
              onChange={onRadioChange}
            />
            <div>Thanh Toán bằng Momo</div>
          </label>
        </div>

        <button
          className="mt-8 h-auto w-1/2 rounded-lg bg-rose-600 p-2 text-lg"
          onClick={() => {}}
        >
          Tiến hành Thanh Toán
        </button>
      </div>
    </div>
  );
};

Payment.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Payment;
