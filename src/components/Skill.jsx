import React from 'react'

const Skill = () => {
    return (
        <div className='mt-3 flex gap-2 items-center justify-center max-w-[350px] flex-wrap'>
            <div className='flex gap-1'>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-blue-500 cursor-pointer'>TypeScript</p>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-yellow-700 cursor-pointer'>JavaScript</p>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-slate-600 cursor-pointer'>Java</p>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-blue-500 cursor-pointer'>Dart</p>
            </div>
            <div className='flex gap-1'>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-blue-800 cursor-pointer'>React</p>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-green-800 cursor-pointer'>Node</p>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-slate-500 cursor-pointer'>Express</p>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-green-900 cursor-pointer'>Mongodb</p>
                <p className='border border-slate-400 rounded-xl px-2 flex items-center font-light text-[10px] hover:bg-blue-500 cursor-pointer'>Tailwind</p>
            </div>
        </div>
    )
}

export default Skill
