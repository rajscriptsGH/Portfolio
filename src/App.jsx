import './App.css';

function App() {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-gray-100'>
      {/* Profile Image */}
      <div className='mt-[-150px]'>
        <img className='h-[200px] rounded-2xl shadow-lg' src="/profile.jpg" alt="Profile" />
      </div>

      <div className='flex flex-col justify-center items-center mt-4'>
        <h1 className='text-2xl font-semibold mb-4'>Vector</h1>

        <div className='flex gap-3 mb-4'>
          <a href="https://x.com/rajscripts100x" target='_blank' rel="noopener noreferrer">
            <img className='h-[40px]' src="/x.png" alt="Twitter/X" />
          </a>
          <a href="https://x.com/rajyadav63" target='_blank' rel="noopener noreferrer">
            <img className='h-[40px]' src="/github.png" alt="github" />
          </a>
          <a href="https://hashnode.com/@yadavraj36" target='_blank' rel="noopener noreferrer">
            <img className='h-[40px]' src="/hashnode.png" alt="hashnode" />
          </a>
        </div>

        <div className='flex justify-center items-center text-center sm:w-[550px] w-[320px] px-2'>
          <p>
            I write <span>code</span>, <span>break</span> things, then <span>fix</span> them, usually in that order. Find me on best Web above. Pretending to be productive.
          </p>
        </div>
        <div className='flex gap-3 mt-4'>
          <p className='px-4 py-1 rounded-lg bg-red-400 outline-none'>HTML</p>
          <p className='px-4 py-1 rounded-lg bg-blue-400 outline-none'>CSS</p>
          <p className='px-4 py-1 rounded-lg bg-yellow-400 outline-none'>JS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
