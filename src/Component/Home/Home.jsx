const Home = ({ togglePlay }) => {
  return (
    <div className="bg-slate-700 w-full h-screen flex items-center justify-center">
      <div className="w-4/5 h-3/4 flex items-center justify-between">
        <div>
          <img src="../../dice.png" alt="Dice" />
        </div>
        <div className="h-3/5 pr-6 w-4/5 flex flex-col items-end justify-end p-5 gap-6">
          <h1 className="text-white text-9xl tracking-tighter">Dice Game</h1>
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
