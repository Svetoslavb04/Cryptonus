import { FC, useRef } from 'react'
import { useScrollTransition } from '../../../hooks/useScrollTransition'

type Props = {
    currencySymbol?: string,
    volumeTraded: number,
    supportedCountries?: number,
    users?: number,
    className?: string
}

const HappyCustomers: FC<Props> =
    ({ currencySymbol = '$', volumeTraded, supportedCountries = 100, users = 100000, className }) => {

        const sectionRef = useRef<HTMLElement>(null)
        useScrollTransition(sectionRef, 80);

        const formatNumberToAbbreviation = (number: number) => {

            if (number <= 0)
                return 0
            else if (number < 1000)
                return Number(number).toFixed(0);
            else if (number >= 1000 && number < 1000000)
                return `${Math.floor(number / 1000).toFixed(0)}K`;

            else if (number >= 1000000 && number < 1000000000)
                return `${Math.floor(number / 1000000).toFixed(0)}M`;

            else if (number >= 1000000000)
                return `${Math.floor(number / 1000000000).toFixed(0)}B`;

            return 0;
        }

        return (
            <section
                ref={sectionRef}
                id='happy-customers-section'
                className={className}
            >
                <div className='flex flex-col items-center gap-2 hover:translate-y-[-1.8rem] transition-all duration-300 cursor-pointer'>
                    <h3 className='happy-customers-volume-traded text-4xl xs:text-5xl'>{currencySymbol}{formatNumberToAbbreviation(volumeTraded)}</h3>
                    <p className='text-xl xs:text-2xl'>Volume Traded</p>
                </div>
                <div className='flex flex-col items-center gap-2 hover:translate-y-[-1.8rem] transition-all duration-300 cursor-pointer'>
                    <h3 className='happy-customers-supported-countries text-4xl xs:text-5xl'>
                        {formatNumberToAbbreviation(supportedCountries)}{formatNumberToAbbreviation(supportedCountries) > 0 ? '+' : ''}
                    </h3>
                    <p className='text-xl xs:text-2xl'>Supported Countries</p>
                </div>
                <div className='flex flex-col items-center gap-2 hover:translate-y-[-1.8rem] transition-all duration-300 cursor-pointer'>
                    <h3 className='happy-customers-users text-4xl xs:text-5xl'>{formatNumberToAbbreviation(users)}{formatNumberToAbbreviation(users) > 0 ? '+' : ''}</h3>
                    <p className='text-xl xs:text-2xl'>Verified Users</p>
                </div>
            </section>
        )
    }

export default HappyCustomers