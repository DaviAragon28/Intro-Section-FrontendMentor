import { ListToShow } from './ListToShow'

export const Features = ({ show, header } : {show: boolean, header: boolean}) => {
    return (
        <ListToShow classname={`${header && 'absolute shadow-xl px-4 py-5 -ml-14 z-40  mt-0 mr-10 rounded-md'}`} show={show}>
            <div className='flex gap-4 items-center hover:text-almostBlack cursor-pointer'>
                <img src="/images/icon-todo.svg" alt="" />
                <span>Todo List</span>
            </div>
            <div className='flex gap-4 items-center hover:text-almostBlack cursor-pointer'>
                <img src="/images/icon-calendar.svg" alt="" />
                <span>Calendar</span>
            </div>
            <div className='flex gap-4 items-center hover:text-almostBlack cursor-pointer'>
                <img src="/images/icon-reminders.svg" alt="" />
                <span>Reminders</span>
            </div>
            <div className='flex gap-4 items-center hover:text-almostBlack cursor-pointer'>
                <img src="/images/icon-planning.svg" alt="" />
                <span>Planning</span>
            </div>
        </ListToShow>
    )
}
