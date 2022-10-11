import { FC, useRef } from 'react'
import { useScrollTransition } from '../../../hooks/useScrollTransition';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type Props = {
    className?: string
};

const WhatIsCryptonus: FC<Props> = ({ className }) => {

    const whatIsCryptonusRef = useRef<HTMLDivElement>(null);

    useScrollTransition(whatIsCryptonusRef, 80);

    return (
        <section id='what-is-cryptonus' className={className}>
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
                            <div key={text} className='flex items-center xs:text-xl  sm:text-2xl md:text-3xl my-4'>
                                <ChevronRightIcon fontSize='large' />{text}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhatIsCryptonus