import type { ChangeEventHandler } from 'react';

type Props = {
  value: string;
  onRadioChange: ChangeEventHandler<HTMLInputElement>;
  content: string;
};

const RadioPayment = ({ value, onRadioChange, content }: Props) => {
  return (
    <label htmlFor={value} className="flex gap-5 rounded-md bg-zinc-900 p-2">
      <input
        type="radio"
        id={value}
        value={value}
        name="payment_method"
        onChange={onRadioChange}
      />
      <div>{content}</div>
    </label>
  );
};

export default RadioPayment;
