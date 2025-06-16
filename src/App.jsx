import './App.css';

function App() {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-gray-100'>
      <p className='absolute top-5 bg-green-400 text-white px-4 py-1 rounded-lg text-center'>Rvmp soon</p>
      <div className='mt-[-150px]'>
        <img className='h-[200px] rounded-2xl shadow-lg' src="/profile.jpg" alt="Profile" />
      </div>

      <div className='flex flex-col justify-center items-center mt-4'>
        <h1 className='text-2xl font-semibold mb-1'>Vector</h1>
        <p className='mb-2'>Full STUCK Developer</p>

        <div className='flex gap-3 mb-4'>
          <a href="https://x.com/rajscripts100x" target='_blank' rel="noopener noreferrer">
            <img className='h-[40px]' src="/x.png" alt="Twitter/X" />
          </a>
          <a href="https://discord.com/users/999711650804412438" target="_blank" rel="noopener noreferrer">
            <img className='h-[40px]' src="/discord.png" alt="discord" />
          </a>

          <a href="https://hashnode.com/@yadavraj36" target='_blank' rel="noopener noreferrer">
            <img className='h-[40px]' src="/hashnode.png" alt="hashnode" />
          </a>
          <a href="https://linkedin.com/in/rajscripts100in/" target='_blank' rel="noopener noreferrer">
            <img className='h-[40px]' src="/linkedin.png" alt="linkedin" />
          </a>
        </div>

        <div className='flex justify-center items-center text-center sm:w-[550px] w-[320px] px-2'>
          <p>
            I write <span>code</span>, <span>break</span> things, then <span>fix</span> them, usually in that order. Pretending to be productive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
