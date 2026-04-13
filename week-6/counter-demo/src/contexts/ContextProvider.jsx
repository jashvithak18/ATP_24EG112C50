import { createContext, useState } from 'react';

export const counterContextObj = createContext();

function ContextProvider({ children }) {
  const [counter, setCounter] = useState(10);

  const incrementCounter = () => setCounter(prev => prev + 1);
  const decrementCounter = () => setCounter(prev => prev - 1);

  return (
    <counterContextObj.Provider value={{ counter, incrementCounter, decrementCounter }}>
      {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider;