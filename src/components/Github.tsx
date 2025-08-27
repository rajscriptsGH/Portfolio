'use client'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div className='flex justify-center items-center w-full px-4 mt-10'>
            <GitHubCalendar username="rajscriptsGH" />
        </div>
    )
}

export default Github

