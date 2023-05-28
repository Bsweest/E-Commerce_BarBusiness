import CartButon, {
  GetCartFromLocalStorage,
} from '@/components/navigation/CartButon';
import NavButton from '@/components/navigation/NavButton';
import Header from '@/config';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Advent_Pro, Cabin } from 'next/font/google';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: ['normal'],
  variable: '--font-cabin',
});

export const advent = Advent_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: ['normal'],
  variable: '--font-advent',
});

export default function MainLayout({ children }: layoutProps) {
  useEffect(() => {
    GetCartFromLocalStorage();
  }, []);

  return (
    <PayPalScriptProvider
      options={{ 'client-id': 'test', currency: 'USD', components: 'buttons' }}
    >
      <Header />
      <main
        className={`relative flex h-screen w-screen ${cabin.variable} ${advent.variable}`}
      >
        {children}
        <div className="absolute flex w-screen flex-1 flex-col items-center bg-transparent">
          <div className="relative flex flex-row gap-7">
            <NavButton content="WELCOME" link="/" />
            <NavButton content="MENU" link="/menu" />
            <NavButton content="SHOPPING" link="/shopping" />
            <NavButton content="RESERVATIONS" link="/reservations" />
          </div>

          <CartButon />
        </div>
      </main>
    </PayPalScriptProvider>
  );
}
