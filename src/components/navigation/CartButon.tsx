import { ObservableObject, observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FcShop } from 'react-icons/fc';

type CartItem = {
  itemID: number;
  count: number;
};

export type ListCart = ObservableObject<{
  list: CartItem[] | never[];
}>;

export const listCart: ListCart = observable({ list: [] });

const GetCartFromLocalStorage = () => {
  const localCart = localStorage.getItem('cart_list');

  if (localCart) {
    const carts = JSON.parse(localCart);
    listCart.list.set(carts);
  }
};

const AddItemIdToCart = (id: number, quantity: number) => {
  const rs = listCart.list.filter((e) => e.itemID.get() === id);
  if (rs.length > 0) {
    rs[0].set((item) => ({ ...item, count: item.count + quantity }));
    return;
  }

  listCart.list.push({
    itemID: id,
    count: quantity,
  });
};

const RemoveItemFromCart = (id: number) => {
  listCart.list.set((prev) => prev.filter((e) => e.itemID !== id));
};

const CartButon = () => {
  const router = useRouter();

  const cartsCount = useSelector(() => {
    let rs = 0;
    console.log(listCart.list.get());

    listCart.list.get().forEach((e) => {
      rs += e.count;
    });
    return rs;
  });

  listCart.list.onChange((listener) => {
    localStorage.setItem('cart_list', JSON.stringify(listener.value));
  });

  const toPaymentPage = () => {
    if (cartsCount > 0) router.push('/payment');
  };

  return (
    <div className="pointer-events-none absolute flex h-full w-full flex-1 flex-row justify-end">
      <div
        className="pointer-events-auto relative mr-8 mt-2 cursor-pointer"
        onClick={toPaymentPage}
      >
        <FcShop size={35} className=" rounded-lg bg-gray-400" />
        {cartsCount ? (
          <div className="absolute -bottom-5 -right-2 flex h-7 w-7 origin-top-left items-center justify-center rounded-full bg-red-500">
            {cartsCount}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { GetCartFromLocalStorage, AddItemIdToCart, RemoveItemFromCart };

export default CartButon;
