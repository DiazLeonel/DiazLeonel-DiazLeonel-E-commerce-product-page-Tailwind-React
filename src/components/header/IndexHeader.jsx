import { useState } from 'react';

import { useCartDetails } from '@/context/useCartDetails';
import { useContext } from 'react';

import logoSneakers from '@/assets/images/logo.svg';
import avatar from '@/assets/images/image-avatar.png';

import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseMenu from '@/components/icons/CloseMenu';
import NavLinkHeader from '@/components/header/NavLinkHeader';
import CartDetailsHeader from '@/components/header/CartDetailsHeader';

const IndexHeader = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false)

    const { countTotalCart } = useContext(useCartDetails)

    const handleOpenMenu = () => {
        setIsOpenMenu(true)
    }
    const handleCloseMenu = () => {
        setIsOpenMenu(false)
    }

    return (
        <>
            <header className='flex container mx-auto items-center gap-8 md:py-0 p-4 relative'>
                <button className='md:hidden' onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img src={logoSneakers} alt="Logo Sneakers" className='mr-auto md:mr-0 mb-1' />
                <nav className={`md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 md:static font-bold ${isOpenMenu ? 'bg-white absolute top-0 left-0 flex flex-col h-full p-8 gap-y-[1.3125rem] w-4/5  z-10' : 'hidden'}`}>
                    <button className='mb-8 md:hidden' onClick={handleCloseMenu}>
                        <CloseMenu />
                    </button>
                    <NavLinkHeader text='Collections' />
                    <NavLinkHeader text='Men' />
                    <NavLinkHeader text='Women' />
                    <NavLinkHeader text='About' />
                    <NavLinkHeader text='Contact' />
                </nav>
                <div className='flex gap-4'>


                    <button className='relative' onClick={() => setIsOpenDetailsCart(!isOpenDetailsCart)}>
                        <CartIcon />
                        <span className='absolute bg-orage-primary px-2 text-xs rounded-full text-white font-bold top-1 '>{countTotalCart}</span>
                    </button>


                    <img className='w-12' src={avatar} alt="Avatar" />
                    {
                        isOpenDetailsCart && <CartDetailsHeader />
                    }
                </div>
            </header>
            <span className='w-full h-[1px] bg-gray-500 md:block container mx-auto hidden'></span>
        </>
    )
}

export default IndexHeader;