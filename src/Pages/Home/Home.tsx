import './Home.css'
import { RefObject, useCallback, useEffect, useRef } from 'react'
import CryptoCard from '../../Components/CryptoCard/CryptoCard';
import { ChevronRight } from 'react-feather';

const Home: React.FC = () => {

  const currenciesSection = useRef<HTMLElement>(null);
  const whatIsCryptonusRef = useRef<HTMLDivElement>(null);

  const windowScrollHandler = useCallback(() => {

    showOnScrollElement(currenciesSection, 60);
    showOnScrollElement(whatIsCryptonusRef, 70);

  }, [currenciesSection, whatIsCryptonusRef]);

  useEffect(() => {

    window.addEventListener('scroll', windowScrollHandler);

    return () => {

      window.removeEventListener('scroll', windowScrollHandler);

    }

  }, [windowScrollHandler]);


  function showOnScrollElement(elementRef: RefObject<HTMLElement>, elementVisibleAfterPixels: number) {

    const windowHeight = window.innerHeight;

    const elementTop = elementRef.current?.getBoundingClientRect().top;

    if ((elementTop || Number.MAX_SAFE_INTEGER) < windowHeight - elementVisibleAfterPixels) {

      elementRef.current?.classList.add("show-on-scroll");
      elementRef.current?.classList.remove("hide-on-scroll");

    } else {

      elementRef.current?.classList.remove("show-on-scroll");
      elementRef.current?.classList.add("hide-on-scroll");

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
          <button className='start-trading-button bg-secondary py-3 px-8 rounded-full text-black xl:text-xl'>Start trading</button>
        </div>
        <div className="image-wrapper px-20 pt-16 w-full flex justify-center">
          <img src="assets/images/cryptocurrency2.png" alt="" className='w-full xl:w-[60%]' />
        </div>
      </section>
      <section ref={currenciesSection} className='pt-20 relative on-scroll-transition'>
        <div
          className='sm:px-14 md:px-20 lg:px-20 py-12 lg:h-96 bg-secondary rounded-[2rem] lg:rounded-full 
          flex items-center gap-6 justify-center flex-col lg:flex-row'
        >
          <CryptoCard
            className='max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={3213.315123}
            iconName='btc'
          />
          <CryptoCard
            className='max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={123323.49}
            iconName='eth'
          />
          <CryptoCard
            className='2xl:block lg:hidden max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={3123123.49}
            iconName='btc'
          />
          <CryptoCard
            className='4xl:block lg:hidden max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
            fullName='Bitcoin'
            nameFrom='BTC'
            nameTo='USD'
            price={31231.49}
            iconName='btc'
          />
        </div>
      </section>
      <section id='what-is-cryptonus' className='my-8 mx-2 sm:mx-6 md:mx-12 bg-primary-dark/10 dark:bg-primaryDark-dark rounded-xl md:py-4  xl:py-16 px-6'>
        <div className='flex gap-16 flex-col xl:flex-row'>
          <div className='basis-2/5'>
            <img src="assets/images/crypto-home-globe.png" alt="" className='m-auto w-[70%] xl:w-fit xl:max-h-[650px]' />
          </div>
          <div ref={whatIsCryptonusRef} className='basis-3/5 flex flex-col on-scroll-transition'>
            <h2 className='text-2xl xs:text-3xl sm:text-5xl md:text-6xl'>What is Cryptonus</h2>
            <p className='xs:text-md sm:text-xl md:text-2xl opacity-85 my-6'>Receive the best trading experience with Cryptonus. Many features are available for you. Start now and receive a bonus!</p>
            {
              [
                'Access real-time cryptocurrency prices',
                'Buy & Sell the most popular cryptocurrencies',
                'P2P trading available',
                '24/7 Customer support'
              ].map(text =>
              (
                <div key={text} className='flex items-center xs:text-xl  sm:text-2xl md:text-3xl my-4'><ChevronRight size={40} />{text}</div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home