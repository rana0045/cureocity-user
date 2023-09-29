import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const GlobalContext = createContext();

export function GridProvider({ children }) {

    let initialState = {
        cart: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}