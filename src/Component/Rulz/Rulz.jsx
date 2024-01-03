import './Rulz.css';

const Rulz = ({ showRule }) => {
  return (
    <div className={`rules-container ${showRule ? 'active' : ''} w-full bg-purple-800 flex flex-col items-center justify-center h-3/5 border-t-4 border-black`}>
      <div onClick={
        showRule
      } 
      className={`w-16 h-16 text-5xl text-center top-2 text-red-400 fixed md:right-4 right-1 pointer`}>
        ✘
      </div>
      <div className='w-4/5 text-2xl md:text-4xl  leading-snug capitalize '>
        <h1 className='text-2xl md:text-4xl text-center mb-3 rul'>✨ How to play this dice game ;-)</h1>
        <ul>
          <li className='mb-2 rul'>✢ select any number from given list</li>
          <li className='mb-2 rul'>✢ click on dice image</li>
          <li className='mb-2 rul'>✢ after this, if the selected number is equal to the dice number, you will get the same point as the dice</li>
          <li className='mb-2'>✢ but if not equal, then 2 marks will be deducted from your score</li>
        </ul>
        <h1 className='text-center text-2xl md:text-4xl'>Thank you 💫</h1>
      </div>
    </div>
  );
};

export default Rulz;
