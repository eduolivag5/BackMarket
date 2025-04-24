import { sellConditions } from '../data'

export default function SellConditions() {
    return (
        <div className='p-4 gap-4 grid grid-cols-2 md:flex md:justify-between rounded-lg bg-gray-200'>
            {sellConditions.map((cond) => 
                <div className='md:flex-1 md:justify-center flex items-center gap-2 md:gap-4'>
                    <p><cond.icon /></p>
                    <p className='text-sm'>{cond.text}</p>
                </div>
            )}
        </div>
    )
}
