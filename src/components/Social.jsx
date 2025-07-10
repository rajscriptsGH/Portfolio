import React from 'react'

const Social = () => {
    return (
        <div className='flex gap-3 mt-3 mb-2'>
            <a href="https://x.com/rajscriptsX" target='_blank' rel="noopener noreferrer">
                <img className='h-[40px] bg-sky-150 rounded-2xl' src="/x.png" alt="Twitter/X" />
            </a>
            <a href="https://github.com/rajscriptsGH" target='_blank' rel="noopener noreferrer">
                <img className='h-[40px] bg-sky-150 rounded-xl' src="/github.png" alt="GitHub" />
            </a>
            <a href="https://discord.com/users/999711650804412438" target="_blank" rel="noopener noreferrer">
                <img className='h-[40px] bg-sky-150 rounded-xl' src="/discord.png" alt="discord" />
            </a>

            <a href="https://hashnode.com/@yadavraj36" target='_blank' rel="noopener noreferrer">
                <img className='h-[40px] bg-sky-150 rounded-xl' src="/hashnode.png" alt="hashnode" />
            </a>
        </div>
    )
}

export default Social
