import React from 'react';

export const BreakpointContext = React.createContext();

export const BreakpointProvider = ({ children }) => {
    const [breakPoint, setBreakPoint] = React.useState('largeMonitor');

    return (
        <BreakpointContext.Provider value={{ breakPoint, setBreakPoint }}>
            {children}
        </BreakpointContext.Provider>
    );
}; 