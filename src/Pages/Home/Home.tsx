import './Home.css';

import { useRef } from 'react';
import { useScrollTransition } from '../../hooks/useScrollTransition';

import CurrenciesSection from '../../Components/CurrenciesSection/CurrenciesSection';

import WhatIsCryptonus from './WhatIsCryptonus/WhatIsCryptonus';
import HappyCustomers from './HappyCustomers/HappyCustomers';

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
      <WhatIsCryptonus className='my-8 mx-2 sm:mx-6 md:mx-12 md:py-4 xl:py-16 px-6 bg-primary-dark/10 dark:bg-primaryDark-dark rounded-xl' />
      <HappyCustomers
        volumeTraded={342131231231}
        supportedCountries={100}
        users={412332}
        className='my-8 mx-2 sm:mx-6 md:mx-12 py-10 lg:py-20 bg-secondary flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-28 rounded-xl'
      />
    </div>
  )
}

export default Home