import './Home.css'
import { useEffect, useRef, useState } from 'react'
import CryptoCard from '../../Components/CryptoCard/CryptoCard';

interface CryptoData {
  [key: string]: {
    price: number
  }
}

const Home: React.FC = () => {

  const currenciesSection = useRef<HTMLElement>(null);
  const [cryptoData, setCryptoData] = useState<CryptoData>({});

  useEffect(() => {
    window.addEventListener('scroll', (e) => {

      if (currenciesSection.current) {
        showCurrenciesSection();
      }

    });


  }, []);



  function showCurrenciesSection() {

    const windowHeight = window.innerHeight;

    const elementTop = currenciesSection.current?.getBoundingClientRect().top;

    const elementVisible = 40;

    if ((elementTop || Number.MAX_SAFE_INTEGER) < windowHeight - elementVisible) {

      currenciesSection.current?.classList.add("show-on-scroll");
    } else {
      currenciesSection.current?.classList.remove("show-on-scroll");
    }

  }

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
          <button className='start-trading-button bg-secondary py-3 px-8 rounded-full text-black'>Start trading</button>
        </div>
        <div className="image-wrapper px-20 pt-16 w-full flex justify-center">
          <img src="assets/images/cryptocurrency2.png" alt="" className='w-full xl:w-[60%]' />
        </div>
      </section>
      <section ref={currenciesSection} className='pt-20 relative translate-y-[150px] opacity-0 transition-all duration-[800ms] ease'>
        <div
          className='sm:px-14 md:px-20 lg:px-20 py-12 lg:h-96 bg-secondary rounded-[5rem] lg:rounded-full 
          flex items-center gap-6 justify-center flex-col lg:flex-row'
        >
          <CryptoCard
            className='max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={32900.49}
            iconName='btc'
          />
          <CryptoCard
            className='max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={3290033333333333333333.49}
            iconName='eth'
          />
          <CryptoCard
            className='2xl:block lg:hidden max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={3290033333333333333333.49}
            iconName='btc'
          />
          <CryptoCard
            className='4xl:block lg:hidden max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={3290033333333333333333.49}
            iconName='btc'
          />
        </div>
      </section>
    </div>
  )
}

export default Home