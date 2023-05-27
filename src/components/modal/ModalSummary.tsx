import { modalAnimation } from '@/animation_variant';
import { Observable, ObservableObject } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

type ModalSummaryType = {
  modalState: ObservableObject<{ data: any }>;
};

const ModalSummary = ({ modalState }: ModalSummaryType) => {
  const [isDone, setIsDone] = useState(false);

  const itemID = useSelector(() =>
    modalState.data.get() ? modalState.data.id.get() : null,
  );

  const closeModal = () => {
    setIsDone(false);
    modalState.set({ data: null });
  };

  return (
    <div className="pointer-events-none absolute top-0 left-0 flex h-full w-full flex-1 ">
      {itemID ? (
        <div
          className="pointer-events-auto flex flex-1 items-center justify-center"
          onClick={closeModal}
        >
          <div
            className={`pointer-events-auto h-1/2 w-1/3 rounded-2xl ${
              isDone ? 'bg-orange-300' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <picture>
              <motion.img
                width={100}
                height={100}
                src="/asset/logo.svg"
                alt="test"
                transition={modalAnimation}
                layoutId={`modal${itemID}`}
                onLayoutAnimationComplete={() => setIsDone(true)}
              />
            </picture>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModalSummary;
