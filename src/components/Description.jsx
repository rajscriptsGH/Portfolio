import React from 'react'

const Description = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center sm:w-[550px] w-[320px] px-2'>
            <p>
                I write <span>code</span>, <span>break</span> things, then <span>fix</span> them, usually in that order. Pretending to be productive.
            </p>
            <p className='flex justify-center items-center text-center underline text-blue-400 gap-0 '>
                <img className='h-9' src="/dot.png" alt="dot" />
                World best website
            </p>
        </div>
    )
}

export default Description
