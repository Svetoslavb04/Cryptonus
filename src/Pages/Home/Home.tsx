import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="home-page dark:text-onPrimaryDark text-onPrimary p-2">
      <section className='introduction flex flex-col text-center pt-9 xl:px-[29%] 3xl:px-[35%]'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl'>Learn, buy & sell crypto easily</h1>
        <h2 className="py-10 px-8 xs:px-[4rem] sm:px-20 md:px-22 xl:px-[20%] text-lg lg:text-xl whitespace-pre-wrap">
          <span className="font-['Orbitron']">Cryptonus </span>
          is the easiest place to buy and sell cryptocurrency. Get started today.
        </h2>
      </section>
    </div>
  )
}

export default Home