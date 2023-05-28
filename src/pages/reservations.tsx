import { AddItemIdToCart } from '@/components/navigation/CartButon';
import MainLayout from '@/layouts/MainLayout';
import { ItemData, Table } from '@/placeholder_data';
import GetFullDateTime from '@/utils/GetFullDateTime';
import NumberFormat from '@/utils/PriceFormat';
import { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import { NextPageWithLayout } from './_app';

const Reservations: NextPageWithLayout = () => {
  const [cusName, setCusName] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [table, setTable] = useState<string>('');
  const [selected, setSelected] = useState<ItemData | null>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());

  const onDateChange = (date: Date) => {
    setStartDate(date);
  };
  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCusName(event.target.value);
  };
  const onTableChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTable(event.target.value);
    Table.forEach((item) => {
      if (item.name === event.target.value) {
        setSelected(item);
      }
    });
  };

  const reserveTable = () => {
    if (selected === null) return;
    const timestamp = GetFullDateTime(startDate, time).getTime();
  };

  return (
    <div className="blackblur flex flex-1 items-center justify-center bg-[url('/asset/reservations.jpg')]">
      <div className="relative flex h-4/5 w-1/2">
        <div className=" flex h-full w-full  rounded-3xl bg-black opacity-70" />

        <div className="absolute flex w-full flex-1 flex-col gap-4 p-10 text-white">
          <div className="flex flex-row">
            <div className="flex w-40 flex-col font-cabin [&>*]:h-12">
              <div className="flex items-center">Họ Tên: </div>
              <div className="flex items-center">Ngày/Giờ Đặt lịch: </div>
              <div className="flex items-center">Bàn: </div>
              <div className="flex items-center">
                Giá:{' '}
                <span className="ml-2 underline">
                  {' '}
                  {selected ? NumberFormat(selected.price) + '.000đ' : ''}
                </span>{' '}
              </div>
            </div>

            <div className="flex flex-1 flex-col font-cabin [&>*]:flex [&>*]:h-12 [&>*]:items-center">
              <div>
                <input
                  className="w-96 rounded-lg p-1"
                  type="text"
                  value={cusName}
                  onChange={onNameChange}
                />
              </div>
              <div className="flex flex-row">
                <DatePicker
                  className="w-80 rounded-lg p-1"
                  selected={startDate}
                  onChange={onDateChange}
                />
                <input
                  className=" w-32 rounded-lg p-1"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <select
                  className="w-32 rounded-lg p-2"
                  onChange={onTableChange}
                  value={table}
                >
                  <option selected disabled value={''}>
                    Choose here
                  </option>
                  {Table.map((e) => (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 items-center justify-center">
            <button
              className="rounded-lg bg-rose-600 px-10 py-2"
              onClick={reserveTable}
            >
              Đặt bàn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Reservations.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Reservations;
