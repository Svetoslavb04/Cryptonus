import { useRef } from 'react'
import { useScrollTransition } from '../../hooks/useScrollTransition';
import CryptoCard from '../CryptoCard/CryptoCard'

function CurrenciesSection() {

    const currenciesSection = useRef<HTMLDivElement>(null);

    useScrollTransition(currenciesSection, 80);

    return (
        <section ref={currenciesSection} className='pt-20 relative on-scroll-transition'>
            <div
                className='sm:px-14 md:px-20 lg:px-20 py-12 lg:h-96 bg-secondary rounded-[2rem] lg:rounded-full 
          flex items-center gap-6 justify-center flex-col lg:flex-row'
            >
                <CryptoCard
                    className='max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
                    fullName='Bitcoin'
                    nameFrom='BTC'
                    nameTo='USDT'
                    price={3213.315123}
                    iconName='btc'
                />
                <CryptoCard
                    className='max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
                    fullName='Polcadot'
                    nameFrom='DOT'
                    nameTo='USDT'
                    price={123323.49}
                    iconName='dot'
                />
                <CryptoCard
                    className='lg:hidden 2xl:block max-md:min-w-[100%] max-md:max-w-[100%] max-lg:min-w-[80%] max-lg:max-w-[80%] max-lg:rounded-[3rem]'
                    fullName='Ethereum'
                    nameFrom='ETH'
                    nameTo='USDT'
                    price={3123123.49}
                    iconName='eth'
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
    )
}

export default CurrenciesSection