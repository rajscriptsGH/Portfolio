import './App.css';
import Description from './components/Description';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Social from './components/Social';

function App() {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-gray-100'>
      <p className='absolute top-5 bg-green-400 text-white px-4 py-1 rounded-lg text-center'>Rvmp soon...</p>
      <Profile />
      <Social />
      <Description />
      <Skill />
    </div>
  );
}

export default App;
