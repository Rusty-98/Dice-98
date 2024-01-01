import { useState } from "react"
import Number from "../Number/Number"
import Rulz from "../Rulz/Rulz"
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sound from '../../../public/sound/roll.mp3'
import music from '../../../public/sound/stop.mp3'
const aud = () => {
    try{
        const audio = new Audio(sound)
        audio.play()
    }
    catch(err){
        console.log(err)
    }
}

const stop = () => {
    try{
        const audio = new Audio(music)
        audio.play()
    }
    catch(err){
        console.log(err)
    }
}

const Play = () => {

    const arr = [1, 2, 3, 4, 5, 6]
    const [select, setSelect] = useState()
    const [currDice, setCurrDice] = useState(1)
    const [score, setScore] = useState(0)
    const [rules, setRules] = useState(false)
    const notify = () => toast(' Please Select A Number!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type:"warning",
    });

    const diceRoll = () => {
        if (!select) {
            notify()
            stop();
            return
        }
        const newValue = (Math.floor(Math.random() * 6) + 1)
        setCurrDice(newValue)
        aud()
        if (newValue === select) {
            setScore(score + 4)
        }
        setSelect()
    }

    const resetScore = () => {
        setScore(0)
    }

    const showRule = () => {
        setRules((prev) => !prev)
    }

    return (
        <div className="bg-slate-700 h-screen w-full text-white">
            <div className="flex items-center justify-between w-full p-4">
                <div className="w-1/5">
                    <h1 className="text-8xl text-center mb-4">{score}</h1>
                    <h1 className="text-6xl text-center capitalize">Total Score</h1>
                </div>
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl capitalize mr-4">Select from these:</h1>
                    {arr.map((value, i) => (
                        <Number
                            key={i}
                            value={value}
                            isSelected={value === select}
                            onClick={() => setSelect(value)}
                        />
                    ))}
                </div>
            </div>
            <div className="">
                <img src={`../../dice_${currDice}.png`} alt="" className="m-auto h-72 cursor-pointer rounded-md"
                    onClick={diceRoll}
                />
                <h1 className="text-center text-3xl capitalize">
                    Click on dice to roll🎲
                </h1>
                <div className="w-full flex flex-col gap-8 mt-8">
                    <button className="w-1/5 h-14 rounded-md bg-black text-white m-auto border-4 border-white"
                        onClick={resetScore}
                    >
                        Reset Score
                    </button>
                    <button className="w-1/5 h-14 rounded-md bg-black capitalize text-white m-auto border-4 border-white"
                        onClick={showRule}
                    >
                        show rules
                    </button>
                </div>

            </div>
            {rules && <Rulz showRule={showRule} />}
            {<ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Flip}
                theme="dark"
            />}
        </div>
    )
}

export default Play
