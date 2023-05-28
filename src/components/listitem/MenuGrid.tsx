import { MenuItem } from '@/placeholder_data';
import NumberFormat from '@/utils/PriceFormat';

type Props = {
  data: MenuItem;
};

type Spans = {
  [key: number]: string;
};

const spans: Spans = {
  12: 'col-span-12',
  6: 'col-span-6',
  4: 'col-span-4',
  3: 'col-span-3',
};

const MenuGrid = ({ data }: Props) => {
  return (
    <div
      className={`${
        spans[data.grid]
      } my-5 flex flex-col items-center text-3xl text-orange-200`}
    >
      <div className="items-end">
        {data.name}
        <span className="ml-2 text-lg">{NumberFormat(data.price)}.000đ</span>
      </div>
      <div className="text-lg">
        {data.description} / Conc: {data.level}
      </div>
    </div>
  );
};

export default MenuGrid;
