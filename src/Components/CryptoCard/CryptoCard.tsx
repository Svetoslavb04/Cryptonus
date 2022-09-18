type Props = {
    className?: string,
    iconName?: string,
    fullName: string,
    nameFrom: string,
    nameTo: string,
    price: number,
}

const CryptoCard: React.FC<Props> = ({ className, iconName, fullName, nameFrom, nameTo, price }) => {
    return (
        <div
            className={`bg-onPrimaryDark dark:bg-onPrimary min-w-[380px] max-w-[380px] py-10 px-6 sm:px-10 rounded-full 
            hover:drop-shadow-2xl transition-all duration-300 overflow-hidden ${className}`}
        >
            <div className="flex">
                <img
                    className="w-10"
                    src={`assets/images/crypto-icons/svg/color/${iconName || 'generic'}.svg`}
                    alt="crypto icon"
                />
                <div className="flex flex-col pl-4">
                    <p>{fullName}</p>
                    <p>{nameFrom}/{nameTo}</p>
                </div>
            </div>
            <div className="pt-4 text-2xl flex gap-3 flex-wrap lg:flex-nowrap">
                <p>{nameTo}</p>
                <p className="tracking-wider">{price.toLocaleString('en-US')}</p>
            </div>
        </div>
    )
}

export default CryptoCard