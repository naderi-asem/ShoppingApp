import React, { useReducer, useContext } from "react";

const initialState = 0;
const reducer = (state, actions) => {
    switch (actions.type) {
        case "add":
            return state + actions.value;
        case "decrement":
            return state - actions.value;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {

    const [count, dispatch] = useReducer(reducer, initialState);

    // const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <CounterContext.Provider value={count}>
            <CounterContextDispatcher.Provider value={dispatch}>
                {children}
            </CounterContextDispatcher.Provider>
        </CounterContext.Provider>
    );
}

export default CounterProvider;
export const useCounter = () => useContext(CounterContext);
export const useCounterDispatcher = () => {
    return useContext(CounterContextDispatcher)

    // const addOne = () => {
    //     setCount((prevCount) => prevCount + 1);
    // }

    // const addFive = () => {
    //     setCount(prevCount => prevCount + 5);
    // }

    // const resetState = () => {
    //     setCount(initialState)
    // }

    // const decrement = () => {
    //     setCount(prevCount => prevCount -1)
    // }

    // return {addOne, addFive, resetState, decrement};
};