import { FC, useRef } from 'react'
import Button from '@mui/material/Button';
import { useScrollTransition } from '../../../hooks/useScrollTransition';
type Props = {
    bonus: number,
    currencySymbol?: string,
    className?: string
};

const SignUpBonus: FC<Props> = ({ bonus, currencySymbol = '$', className }) => {

    const sectionRef = useRef<HTMLElement>(null);
    useScrollTransition(sectionRef, 80)

    return (
        <section
            ref={sectionRef}
            className={`sign-up-bonus-section ${className}`}
        >
            <div className='flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-0'>
                <div className='basis-4/6 xl:basis-3/6'>
                    <h3 className='text-3xl'>Start trading with {currencySymbol}{bonus} worth in USDT demo account.</h3>
                </div>
                <div className=''>
                    <Button
                        variant="contained"
                        className='pulse-on-hover bg-secondary hover:bg-secondary text-black font-medium py-4 px-8 text-xl rounded-full'
                    >
                        Become a trader
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default SignUpBonus