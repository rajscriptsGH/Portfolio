import React from 'react'

const Description = () => {
    return (
        <div className='mt-3 flex flex-col justify-center items-center text-center  max-w-[380px] px-2'>
            <p>
                I write <span className='text-orange-400'>code</span>, <span className='text-red-400'>break</span> things, then <span className='text-green-300'>fix</span> them, usually in that order. Pretending to be productive.
            </p>
            <p className='flex justify-center items-center text-center underline text-blue-400 gap-0 '>
                <img className='h-9' src="/dot.png" alt="dot" />
                World best website
            </p>
        </div>
    )
}

export default Description
