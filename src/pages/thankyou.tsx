import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';

const Thankyou: NextPageWithLayout = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5">
      <div className="font-advent text-3xl">
        Cảm ơn bạn đã tin tưởng và mua hàng từ JackInCorner
      </div>
      <Link className="text-4xl text-orange-300 underline" href="/">
        Về trang chủ
      </Link>
    </div>
  );
};

Thankyou.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Thankyou;
