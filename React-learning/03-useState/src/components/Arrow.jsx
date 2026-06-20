import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
function  Arrow() {
    const [state, setState] = useState(false);
    const [count, setCount] = useState(5);
    const handleMove = () => setState(true)
    useEffect(()=>{
        setCount(count+1)},
        [state])
    return (
    <>
    <div className="w-full h-full "
    style={{
        opacity: state ? 1: 0,
        visibility: state? "visible" : "hidden",
        transition: "0.3s"
    }}
    >Abdullah</div>
    <FaArrowAltCircleRight onClick={handleMove} />
    <button>count: {count}</button>
    </>
    )
    
    
}
export default Arrow