import React, { useState } from 'react'
import { Company } from '../containers/Company'
import { Features } from '../containers/Features'

export const Menu = ({ open }: { open: boolean }) => {
    const [showFeatures, setShowFeatures] = useState<boolean>(false)
    const [showCompany, setShowCompany] = useState<boolean>(false)

    return (
        <div className={`fixed top-0 right-0 bottom-0 transition-all backdrop-blur-sm backdrop-brightness-50 ${open ? 'left-0' : 'left-[100%]'} md:hidden`}>
            <nav className='flex flex-col bg-white w-52
            mr-0 ml-auto h-full px-4 pt-16 gap-5'>
                <ul className='flex flex-col gap-4'>
                    <li onClick={() => setShowFeatures(!showFeatures)}>
                        <div className=' flex items-center gap-3 '>
                            <span className='font-medium text-mediumGray text-base'>Features</span>
                            <img 
                                src={ showFeatures ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="icon-arrow" 
                            />
                        </div>
                        <Features header={false} show={showFeatures} />
                    </li>
                    <li onClick={() => setShowCompany(!showCompany)}>
                        <div className='flex items-center gap-3'>
                            <span className='font-medium text-mediumGray text-base'>Company</span>
                            <img 
                                src={ showCompany ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="icon-arrow"
                            />
                        </div>
                        <Company header={false} show={showCompany} />
                    </li>
                    <li className='font-medium text-mediumGray text-base'>Careers
                    </li>
                    <li className='font-medium text-mediumGray text-base'>About</li>
                </ul>
                <ul className='flex flex-col items-center gap-4 text-mediumGray text-sm'>
                    <li>
                        <span>Login</span>
                    </li>
                    <li className='w-full '>
                        <button className='border-2 border-mediumGray w-full py-2 rounded-lg'>Register</button>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
