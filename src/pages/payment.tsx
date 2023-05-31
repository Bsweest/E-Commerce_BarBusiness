import RadioPayment from '@/components/RadioPayment';
import PayItem from '@/components/listitem/PayItem';
import ModalPayment from '@/components/modal/ModalPayment';
import { ClearCart, listCart } from '@/components/navigation/CartButon';
import MainLayout from '@/layouts/MainLayout';
import { AllShopItem, ItemData } from '@/placeholder_data';
import NumberFormat from '@/utils/PriceFormat';
import { useSelector } from '@legendapp/state/react';
import { useRouter } from 'next/router';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import { NextPageWithLayout } from './_app';

export type CartItem = {
  item: ItemData;
  count: number;
};

const Payment: NextPageWithLayout = () => {
  const [total, setTotal] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const cartToPay = useSelector(() => {
    const rs = listCart.list.get().map((item) => {
      const itemData = AllShopItem.filter((e) => e.id === item.itemID);
      const cartItem: CartItem = { item: itemData[0], count: item.count };
      return cartItem;
    });
    return rs;
  });

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const toggleModal = () => {
    if (!showModal && paymentMethod === null) return;
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    const sum = cartToPay.reduce(
      (prev, item) => prev + item.item.price * item.count,
      0,
    );
    setTotal(sum);
  }, [cartToPay]);

  return (
    <>
      <div className="flex h-full w-full flex-1 flex-row pt-9">
        <div className="flex w-3/5 flex-col items-center justify-center">
          <div className="relative flex w-full items-center justify-center font-advent text-2xl">
            Shopping Cart
            <div className="absolute flex w-full flex-1 justify-end">
              <button
                onClick={ClearCart}
                className="mr-5 -translate-x-full rounded-lg bg-gray-400 px-3 py-1 font-cabin text-base text-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
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
            <input
              className="mx-5 flex-1 p-1"
              value={address}
              type="text"
              onChange={onAddressChange}
            />
          </div>

          <div className="font-cabin">Phương thức thanh toán:</div>
          <div className="flex w-full flex-col justify-start gap-3 px-10 font-cabin">
            <RadioPayment
              value="cod"
              onRadioChange={onRadioChange}
              content="Trả khi nhận hàng"
            />
            <RadioPayment
              value="momo"
              onRadioChange={onRadioChange}
              content="Thanh Toán bằng Momo"
            />
            <RadioPayment
              value="international"
              onRadioChange={onRadioChange}
              content="Thanh Toán bằng PayPal/Debit Card"
            />
          </div>

          <button
            className="mt-8 h-auto w-1/2 rounded-lg bg-rose-600 p-2 text-lg"
            onClick={toggleModal}
          >
            Tiến hành Thanh Toán
          </button>
        </div>
      </div>

      <ModalPayment
        isShow={showModal}
        toggleModal={toggleModal}
        data={{ total, address, paymentMethod }}
      />
    </>
  );
};

Payment.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Payment;
