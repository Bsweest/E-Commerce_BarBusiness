import { modalAnimation } from '@/animation_variant';
import { ObservableObject } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  modalState: ObservableObject<{ data: any }>;
  data: any;
};

const MenuItem = ({ modalState, data }: Props) => {
  const isChoosed = useSelector(() =>
    modalState.data.get() ? modalState.data.id.get() === data.id : false,
  );

  const openModal = () => {
    modalState.data.set(data);
  };

  return (
    <div className="h-32 w-32" onClick={openModal}>
      {!isChoosed ? (
        <motion.img
          width={300}
          height={300}
          src={'/asset/logo.png'}
          alt="test"
          transition={modalAnimation}
          layoutId={`modal${data.id}`}
        />
      ) : (
        <Image
          width={300}
          height={300}
          src={'/asset/logo.png'}
          alt="test"
          className="blur-sm"
        />
      )}
    </div>
  );
};

export default MenuItem;
