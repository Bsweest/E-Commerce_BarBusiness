import CurrentRateConvert from '@/utils/CurrencyRateConnvert';
import NumberFormat from '@/utils/PriceFormat';
import { PayPalButtons } from '@paypal/react-paypal-js';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  isShow: boolean;
  toggleModal: Function;
  data: {
    total: number;
    address: string;
    paymentMethod: string | null;
  };
};

const ModalPayment = ({ isShow, toggleModal, data }: Props) => {
  const router = useRouter();
  const { total, address, paymentMethod } = data;

  const donePayment = () => {
    localStorage.set('cart_list', JSON.stringify([]));
    router.push('/thankyou');
  };

  const PaymentRender = () => {
    switch (paymentMethod) {
      case 'cod':
        return <Cod total={total} />;
      case 'momo':
        return <Momo total={total} />;
      case 'international':
        return <Paypal total={total} />;

      default:
        return <h1>Không có Payment method được chọn</h1>;
    }
  };

  return (
    <div className="pointer-events-none absolute flex h-full w-full flex-1">
      {isShow ? (
        <div
          className="pointer-events-auto flex flex-1 items-center justify-center"
          onClick={() => toggleModal()}
        >
          <div
            className={`pointer-events-auto flex h-4/5 w-1/2 flex-col rounded-2xl border-2 bg-zinc-900 p-3`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-row items-center font-cabin">
              <div className="">Địa Chỉ: </div>
              <input
                className="mx-5 flex-1 bg-neutral-800 p-1"
                value={address}
                readOnly
              />
            </div>

            <div className="mb-10 mt-5 flex flex-row items-center font-cabin text-xl">
              Tổng cần phải trả:{' '}
              <span className="mx-4"> {NumberFormat(total)}.000 đ </span>
              <div className="flex flex-1 justify-end">
                <button
                  className="rounded-lg bg-green-700 py-1 px-4"
                  onClick={donePayment}
                >
                  Chấp nhận
                </button>
              </div>
            </div>

            {PaymentRender()}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Cod = ({ total }: { total: number }) => {
  return <h1>Đơn hàng sẽ được xử lý và chuẩn bị sau khi bạn ấy Chấp nhận</h1>;
};

const Momo = ({ total }: { total: number }) => {
  return (
    <div className="white mx-16 -mt-5 flex flex-col items-center justify-center rounded-xl">
      <div className="relative h-80 w-80">
        <Image
          src={'/asset/momo.jpg'}
          fill
          alt="momo"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="font-sans">
        Nội dung chuyển tiền:{' '}
        <span className="font-bold">PLACEHOLDER_INVOICE_ID</span>
      </div>
      <div className="font-sans">
        Số tiền: <span className="font-bold">{NumberFormat(total)}.000 đ</span>
      </div>
      <div>Ấn Hoàn Thành để được xử lý Order</div>
      <div className="font-sans text-sm text-gray-500">
        * Trường hợp chuyển sai nội dung hoặc số tiền xin vui lòng liên hệ số
        điện thoại: 09999999
      </div>
    </div>
  );
};

const Paypal = ({ total }: { total: number }) => {
  return (
    <div className="mx-16 rounded-xl bg-white p-4 py-7">
      <PayPalButtons
        createOrder={async (_, actions) => {
          const orderId = await actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: CurrentRateConvert(total),
                },
              },
            ],
          });
          return orderId;
        }}
      />
    </div>
  );
};

export default ModalPayment;
