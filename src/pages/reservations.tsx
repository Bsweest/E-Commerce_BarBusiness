import MenuItem from '@/components/listitem/MenuItem';
import ModalSummary from '@/components/modal/ModalSummary';
import MainLayout from '@/layouts/MainLayout';
import { MenuBoard } from '@/placeholder_data';
import { useObservable, useSelector } from '@legendapp/state/react';
import { AnimatePresence } from 'framer-motion';
import React, { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';

const Reservations: NextPageWithLayout = () => {
  const modalState = useObservable({ data: null });

  return (
    <div className="pt-9">
      <AnimatePresence>
        <div className="relative flex h-full w-full flex-1">
          {MenuBoard.map((item) => {
            return (
              <MenuItem key={item.id} modalState={modalState} data={item} />
            );
          })}
        </div>
        <ModalSummary modalState={modalState} />
      </AnimatePresence>
    </div>
  );
};

Reservations.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Reservations;
