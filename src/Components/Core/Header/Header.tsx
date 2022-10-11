import { useState } from 'react'
import "./Header.css"
import { Sun, Menu, Moon } from 'react-feather';
import { themes } from '../../../constants/themes';

type Props = {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<Props> = ({ theme, setTheme }) => {

  const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false);

  const toggleMobileMenu = () => setIsMobileMenuShown(isMobileMenuShown => !isMobileMenuShown);

  const toggleThemeHandler = () => {

    setTheme((theme) => {

      let newTheme: string = '';

      if (theme === themes.dark) {

        newTheme = themes.light;

      } else if (theme === themes.light) {

        newTheme = themes.dark;

      }

      const favicoLinks = document.querySelectorAll('.favico');

      favicoLinks.forEach(favicoLink => {

        let href = favicoLink.getAttribute('href')!;

        favicoLink.setAttribute('href', href.replace(theme, newTheme));
      })

      return newTheme;
    })

  }

  return (
    <div className='header text-onPrimary dark:text-onPrimaryDark flex flex-wrap items-center py-2 xs:py-0 xs:h-16 border-b border-solid dark:border-primary-light/25 border-onPrimary/25 border-b-1 relative'>
      <div className="logo font-bold h-full flex items-center grow-[2] shrink basis-0 select-none">
        <h1 className="text-3xl xl:text-4xl pl-7 pb-[3px] font-['Orbitron'] font-thin">Cryptonus</h1>
      </div>
      <ul className="nav text-xl gap-7 h-full xl:flex hidden grow shrink justify-center select-none">
        <li className='font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-secondary h-full flex items-center pt-1'>Homepage</li>
        <li className='font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-secondary h-full flex items-center pt-1'>Markets</li>
        <li className='font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-secondary h-full flex items-center pt-1'>Buy Crypto</li>
        <li className='font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-secondary h-full flex items-center pt-1'>Sell Crypto</li>
        <li className='font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-secondary h-full flex items-center pt-1'>Send Crypto</li>
      </ul>
      <ul className={`nav-mobile flex text-xl xl:hidden flex-col ${!isMobileMenuShown ? 'scale-1-0' : 'scale-1-1'} 
          absolute top-full w-full bg-primary dark:bg-primaryDark-dark origin-top transition-all duration-300 
          px-8 py-3 border-b border-onPrimary/25 dark:border-onPrimaryDark/25`}
      >
        <li
          className='font-semibold h-full flex items-center hover:bg-primaryDark-light/50 
          transition-colors duration-300 rounded-sm p-2'
        > <span className='pl-2'>Homepage</span></li>
        <li
          className='font-semibold h-full flex items-center hover:bg-primaryDark-light/50 
          transition-colors duration-300 rounded-sm p-2'
        > <span className='pl-2'>Markets</span></li>
        <li
          className='font-semibold h-full flex items-center hover:bg-primaryDark-light/50 
          transition-colors duration-300 rounded-sm p-2'
        > <span className='pl-2'>Buy Crypto</span></li>
        <li
          className='font-semibold h-full flex items-center hover:bg-primaryDark-light/50 
          transition-colors duration-300 rounded-sm p-2'
        > <span className='pl-2'>Sell Crypto</span></li>
        <li
          className='font-semibold h-full flex items-center hover:bg-primaryDark-light/50 
          transition-colors duration-300 rounded-sm p-2'
        > <span className='pl-2'>Send Crypto</span></li>
      </ul>
      <ul className='flex text-xl gap-3 h-full justify-end items-center grow-[2] shrink basis-0 select-none'>
        <li
          onClick={toggleThemeHandler}
          className='transition-colors duration-300 cursor-pointer pl-4 py-[2px]' data-testid="theme-toggler"
        >
          {
            theme === themes.dark
              ? <Sun size={24} className='hover:text-yellow-300' data-testid="sun-svg" />
              : <Moon size={24} className='hover:text-secondary' data-testid="moon-svg" />
          }
        </li>
        <li
          onClick={toggleMobileMenu}
          className={
            `lg:hidden cursor-pointer hover:text-secondary transition-colors duration-300 
            ${isMobileMenuShown ? 'text-secondary' : ''}`
          }
        >
          <Menu data-testid="menu-svg" />
        </li>
        <li className='pr-4'>
          <button className='px-2 border-2 border-onPrimary dark:border-onPrimaryDark hover:border-secondary dark:hover:border-secondary rounded-xl hover:border-2 hover:text-secondary'>
            Wallet
          </button>
          <button className='px-2 rounded-xl hover:text-secondary'>
            Login
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Header