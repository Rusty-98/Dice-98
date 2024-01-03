import './Home.css';

const Home = ({ togglePlay }) => {
  return (
    <div className="bg-slate-700 w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-4/5 h-3/4 flex items-center justify-between main">
        <div className='img'>
          <img src="../../dice.png" alt="Dice" />
        </div>
        <div className="h-3/5 pr-6 md:w-4/5 w-full flex flex-col items-center md:items-end justify-end p-5 gap-6 write">
          <h1 className="text-white text-8xl md:text-9xl tracking-tighter text-center md:text-left fon">Dice Game</h1>
          <button
            onClick={togglePlay}
            className="bg-black rounded-lg p-2 w-44 h-14 flex items-center justify-center text-white text-2xl"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
