import './Home.css';

import { useRef } from 'react';
import { useScrollTransition } from '../../hooks/useScrollTransition';

import WhatIsCryptonus from '../../Components/WhatIsCryptonus/WhatIsCryptonus';
import CurrenciesSection from '../../Components/CurrenciesSection/CurrenciesSection';

const Home: React.FC = () => {

  const currenciesSection = useRef<HTMLElement>(null);

  useScrollTransition(currenciesSection, 60);

  return (
    <div className="home-page dark:text-onPrimaryDark text-onPrimary p-2">
      <section className='introduction flex flex-col text-center pt-9'>
        <div className='xl:px-[29%] 3xl:px-[35%]'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl'>Learn, buy & sell crypto easily</h1>
          <h2 className="py-10 px-8 xs:px-[4rem] sm:px-20 md:px-22 xl:px-[20%] text-lg lg:text-xl whitespace-pre-wrap">
            <span className="font-['Orbitron']">Cryptonus </span>
            is the easiest place to buy and sell cryptocurrency. Get started today.
          </h2>
        </div>
        <div className="start-trading-wrapper">
          <button className='start-trading-button bg-secondary py-3 px-8 rounded-full text-black xl:text-xl'>Start trading</button>
        </div>
        <div className="image-wrapper px-20 pt-16 w-full flex justify-center">
          <img src="assets/images/cryptocurrency2.png" alt="" className='w-full xl:w-[60%]' />
        </div>
      </section>
      <CurrenciesSection />
      <WhatIsCryptonus />
    </div>
  )
}

export default Home