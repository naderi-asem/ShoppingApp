import { useCounter, useCounterDispatcher } from "./CounterProvider";

const CounterOne = () => {
    const count = useCounter();
    const dispatch = useCounterDispatcher();
    
    return ( 
        <div>
            <p>count is: {count}</p>
            <button onClick={() => dispatch({type: "add", value: 1})}>add one</button>
            {/* <button onClick={actions.addFive}>add five</button> */}
            <button onClick={() => dispatch({type: "reset"})}>reset</button>
            <button onClick={() => dispatch({type: "decrement", value: 1})}>decrement</button>
        </div>
     );
}
 
export default CounterOne;