import { useState } from "react"

function Player() {

    const [run, setRun] = useState(0)
    const [six, setSixes] = useState(0)

    const handleSingle = () => {
        const newRun = run + 1;
        setRun(newRun)
    }
    const handleFour = () => {
        const newRun = run + 4;
        setRun(newRun)
    }
    const handleSix = () => {
        const newRun = run + 6;
        const addedSix = six + 1;
        setSixes(addedSix)
        setRun(newRun)
    }

    return (
        <>
            <h2 className="py-[10px] text-[24px]">Player: Batsman</h2>
            {
                run > 50 && <p className="text-[24px]">Your score: 50+</p>
            }
            <h2 className="text-[24px]">Sixes: {six}</h2>
            <h2 className="py-[10px] text-[24px]">Score: {run}</h2>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </>
    )
}

export default Player