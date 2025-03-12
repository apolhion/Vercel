import React, { createContext, useContext, useState, useEffect } from 'react';

type CountdownContextType = {
  unitsLeft: number;
};

const CountdownContext = createContext<CountdownContextType | undefined>(undefined);

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const [unitsLeft, setUnitsLeft] = useState(20);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (unitsLeft > 9) {
      interval = setInterval(() => {
        setUnitsLeft(prev => prev - 1);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [unitsLeft]);

  return (
    <CountdownContext.Provider value={{ unitsLeft }}>
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const context = useContext(CountdownContext);
  if (context === undefined) {
    throw new Error('useCountdown must be used within a CountdownProvider');
  }
  return context;
}
