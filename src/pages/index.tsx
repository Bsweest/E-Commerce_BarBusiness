import { BusisnessConfig } from '@/config';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import type { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div className="relative flex flex-1">
      <div className="blackblur bg-[url('/asset/background.jpg')] bg-cover bg-center" />

      <div className="absolute flex h-full w-full flex-1 pt-9">
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-row ">
            <div className="ml-32 mt-10 flex flex-col gap-4">
              <div className="text_outline font-cabin text-2xl font-bold">
                Chào mừng Quý khách đến với
              </div>
              <div className="relative flex h-64 w-96">
                <Image
                  className="object-fill"
                  src={'/asset/logo.svg'}
                  alt="logo"
                  fill
                />
              </div>
            </div>
          </div>

          <div className="mb-6 flex flex-row items-end justify-between px-20 font-cabin">
            <div className="text_outline_white font-bold text-indigo-700">
              Địa chỉ: {BusisnessConfig.address}
            </div>

            <div className="w-1/2 rounded-3xl p-2 backdrop-blur-sm">
              <p className="text_outline text-orange-300">
                Chào mừng đến với quán bar{' '}
                <span className="text-2xl text-red-600">JackInCorner!</span> Tại
                đây, bạn có thể tận hưởng không gian ấm cúng và thoải mái cùng
                với những ly cocktail đặc biệt được pha chế bởi các bartender
                chuyên nghiệp. Quán bar của chúng tôi cung cấp cho bạn một trải
                nghiệm giải trí độc đáo với âm nhạc sống và các sự kiện thú vị
                được tổ chức hàng tuần. Hãy đến và tham gia vào không gian tuyệt
                vời này để tận hưởng những giây phút tuyệt vời cùng bạn bè và
                người thân
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
