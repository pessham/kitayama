import React, { createContext, useContext } from 'react';
import { useScroll, useSpring } from 'framer-motion';

const AntigravityContext = createContext(null);

export const AntigravityProvider = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const smoothScrollY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <AntigravityContext.Provider value={{ depth: smoothScrollY, scrollYProgress }}>
            {children}
        </AntigravityContext.Provider>
    );
};

export const useAntigravity = () => {
    const context = useContext(AntigravityContext);
    if (!context) {
        throw new Error('useAntigravity must be used within an AntigravityProvider');
    }
    return context;
};
