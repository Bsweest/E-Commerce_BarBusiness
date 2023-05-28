import MainLayout from '@/layouts/MainLayout';
import { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';

const Reservations: NextPageWithLayout = () => {
  return (
    <div className="blackblur flex flex-1 items-center justify-center bg-[url('/asset/reservations.jpg')]">
      <div className="flex h-4/5 w-1/2 backdrop-blur-sm"></div>
    </div>
  );
};

Reservations.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Reservations;
