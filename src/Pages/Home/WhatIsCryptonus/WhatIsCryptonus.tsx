import { FC, useRef } from 'react'
import { useScrollTransition } from '../../../hooks/useScrollTransition';

import { ChevronRight } from 'react-feather';

const WhatIsCryptonus: FC = () => {

    const whatIsCryptonusRef = useRef<HTMLDivElement>(null);

    useScrollTransition(whatIsCryptonusRef, 80);

    return (
        <section id='what-is-cryptonus' className='my-8 mx-2 sm:mx-6 md:mx-12 bg-primary-dark/10 dark:bg-primaryDark-dark rounded-xl md:py-4 xl:py-16 px-6'>
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
    )
}

export default WhatIsCryptonus