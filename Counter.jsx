import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    return(
        <>
        <h2 className="py-[10px] text-[24px]">Counter: {count}</h2>
        <button onClick={handleAdd}>Add</button>


        </>
    )
}

export default Counter