import { AddItemIdToCart } from '@/components/navigation/CartButon';
import MainLayout from '@/layouts/MainLayout';
import { AllShopItem, ItemData } from '@/placeholder_data';
import NumberFormat from '@/utils/PriceFormat';
import { NextApiRequest, NextApiResponse } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { ChangeEvent, ReactElement, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { NextPageWithLayout } from '../_app';

export async function getServerSideProps({
  query,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  query: ParsedUrlQuery;
}) {
  const id = query.id as string;
  const rs = AllShopItem.filter((e) => e.name === id);

  if (rs.length === 0) {
    return {
      props: { data: null },
    };
  }

  return {
    props: {
      data: rs[0],
    },
  };
}

type Props = { data: ItemData | null };

const ShopItemDetailPage: NextPageWithLayout<Props> = ({ data }) => {
  const [quantity, setQuantity] = useState<number>(1);
  if (!data) return <div>Không Tìm thấy Sản phẩm</div>;

  const onQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'number') setQuantity(e.target.value as any);
  };

  const upDateQuantity = (isIncrease: boolean) => {
    setQuantity((prev) => (isIncrease ? ++prev : prev <= 1 ? 1 : --prev));
  };

  const addToCart = () => {
    AddItemIdToCart(data.id, quantity);
  };

  return (
    <>
      <div className="h-full w-full pt-20">
        <div className={` flex h-full w-full flex-1 flex-row`}>
          <div className="flex w-1/3 flex-col items-center px-12">
            <div className="relative h-96 w-full border-2">
              <Image className="" src={data.url} alt="item" fill />
            </div>
            <button
              className="mt-8 h-auto w-1/2 rounded-lg bg-rose-600 p-2 text-lg"
              onClick={addToCart}
            >
              Đặt Hàng
            </button>
          </div>
          <div
            style={{ borderWidth: '1px' }}
            className="flex flex-1 border-orange-100 p-1"
          >
            <div className="flex flex-1 flex-col gap-3 border-2 border-orange-100 p-3">
              <div className={`font-advent text-3xl`}>{data.name}</div>
              <div
                className={`font-advent text-2xl text-gray-400`}
              >{`Giá tiền: ${NumberFormat(data.price)}.000 đ`}</div>
              <div
                className={`flex flex-row items-center font-advent text-2xl`}
              >
                <div className="mr-10">Số lượng:</div>
                <FiChevronLeft
                  className="mt-1 cursor-pointer rounded-full bg-slate-400"
                  size={30}
                  onClick={() => upDateQuantity(false)}
                />
                <input
                  type="number"
                  value={quantity}
                  onChange={onQuantityChange}
                  className="mx-8 mt-1 w-24 py-1 px-2"
                />
                <FiChevronRight
                  className="mt-1 cursor-pointer rounded-full bg-slate-400"
                  size={30}
                  onClick={() => upDateQuantity(true)}
                />

                <div className="ml-10 text-gray-400"> Còn lại: 999</div>
              </div>

              <div className={`font-advent text-2xl`}>Giới Thiệu:</div>

              <div className=" text-lg text-orange-200">
                {data.description.split(/\r\n|\r|\n/g).map((e, index) => (
                  <p className="" key={index}>
                    {e}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ShopItemDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default ShopItemDetailPage;
