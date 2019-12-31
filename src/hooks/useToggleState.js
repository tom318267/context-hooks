import { useState } from 'react';
function useToggle(initialVal = false) {
    // cass useState, "reserve piece of state"
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    };
    // return piece of state and a function to toggle it 
    return [state, toggle];
}

export default useToggle;