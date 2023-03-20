import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
    show: boolean,
    classname: string
}

export const ListToShow = ({ children, show, classname }: Props) => {
    return (
        <div className={`text-mediumGray ml-6 mt-5  ${show ? 'flex flex-col gap-2 opacity-100' : 'opacity-0 hidden '} transition-opacity ${classname}`}>
            {children}
        </div>
    )
}
