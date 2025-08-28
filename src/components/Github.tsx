'use client'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div className='flex justify-center items-center mt-10 px-2'>
            <div className='border border-slate-500 p-4 rounded-md overflow-hidden w-full max-w-[900px]'>
                <div className='scale-98 md:scale-100 origin-top-left'>
                    <GitHubCalendar username="rajscriptsGH" />
                </div>
            </div>
        </div>
    )
}

export default Github
