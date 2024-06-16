import { useState } from 'react';
<<<<<<< HEAD
import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
=======
>>>>>>> 602bcc43651e4828eb8b4694e6da98609e9467f3

import {brainwave} from '../assets';
import {navigation} from '../constants';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header'

const Header = () => {
    const pathName = useLocation();
    const [openNavigation, setOpenNagigation] = useState(true);

    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNagigation(false);
<<<<<<< HEAD
            enablePageScroll();
        } else{
            setOpenNagigation(true);
            disablePageScroll();
=======
        } else{
            setOpenNagigation(true);
>>>>>>> 602bcc43651e4828eb8b4694e6da98609e9467f3
        }
    };

    const handleClick = () => {
<<<<<<< HEAD
        if(!openNavigation) return;

        enablePageScroll();
=======
>>>>>>> 602bcc43651e4828eb8b4694e6da98609e9467f3
        setOpenNagigation(false);
    }
  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6  lg:bg-n-8/90 lg:backdrop-blur-sm  ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`} >
       <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a href="#hero" className='block w-[12rem] xl:mr-8'>
                <img src={brainwave} alt="Brainwave" width={190} height={40} />
            </a>

            <nav className={` ${openNavigation ? 'flex' : 'hidden'}  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {navigation.map((item) => (
                            <a
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs  lg:font-semibold ${item.url === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                >
                                    {item.title}
                            </a>
                        ))}

                </div>
                        <HamburgerMenu />
            </nav>

            <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
                New account
            </a>

            <Button className="hidden lg:flex">
                    Sign in
            </Button>

            <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                <MenuSvg openNavigation = {openNavigation} className=""/>
            </Button>
       </div>
    </div>
  )
}

export default Header