import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className='mt-[-59px]'>
                <img className='h-[200px] rounded-2xl shadow-lg' src="/profile.jpg" alt="Profile" />
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <h1 className='text-2xl font-semibold mb-1'>Vector</h1>
                <p className='mb-2'>Full STUCK Developer</p>
            </div>

        </div>
    )
}

export default Profile
