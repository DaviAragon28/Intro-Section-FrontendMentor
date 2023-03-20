import React, { useState } from 'react'
import { Company } from '../containers/Company'
import { Features } from '../containers/Features'

export const Header = ({ open, setOpenMenu }: { open: boolean, setOpenMenu: any }) => {
    const [showFeatures, setShowFeatures] = useState<boolean>(false)
    const [showCompany, setShowCompany] = useState<boolean>(false)

    return (
        <header className='p-4 flex justify-between items-center md:px-5 md:py-7 lg:px-14 xl:px-32'>
            <div className='flex gap-6 lg:gap-10 xl:gap-20'>
                <img src="/images/logo.svg" alt="image-logo" />

                <nav className='hidden md:block'>
                    <ul className='flex gap-6'>
                        <li >
                            <div onClick={() => setShowFeatures(!showFeatures)} className=' flex items-center gap-3 cursor-pointer '>
                                <span className='font-medium text-mediumGray text-base hover:text-almostBlack'>Features</span>
                                <img
                                    src={showFeatures ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"}
                                    alt="icon-arrow"
                                />
                            </div>
                            <Features header show={showFeatures} />
                        </li>
                        <li >
                            <div onClick={() => setShowCompany(!showCompany)} className=' flex items-center gap-3 cursor-pointer '>
                                <span className='font-medium text-mediumGray text-base hover:text-almostBlack'>Company</span>
                                <img
                                    src={showCompany ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"}
                                    alt="icon-arrow"
                                />
                            </div>
                            <Company header show={showCompany} />
                        </li>
                        <li className='font-medium text-mediumGray text-base hover:text-almostBlack cursor-pointer'>Careers</li>
                        <li className='font-medium text-mediumGray text-base hover:text-almostBlack cursor-pointer'>About</li>
                    </ul>
                </nav>
            </div>
            <div className='hidden md:flex md:items-center md:gap-6 text-mediumGray '> 
                <span className='cursor-pointer hover:text-almostBlack'>Login</span>
                <button className='border-2 border-mediumGray w-full py-2 px-4 rounded-lg'>Register</button>
            </div>
            <img
                onClick={setOpenMenu}
                className='w-7 h-6 fixed z-40 right-5 md:hidden'
                src={open ? "/images/icon-close-menu.svg" : "/images/icon-menu.svg"}
                alt="icon-menu"
            />
        </header>
    )
}
