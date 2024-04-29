import React, { createContext, useContext } from 'react';
import notesStore from "../store/NotesStore";

export const NotesStoreContext = createContext(null);

export const NotesStoreProvider = ({ children }) => {
    return (
        <NotesStoreContext.Provider value={notesStore}>
            {children}
        </NotesStoreContext.Provider>
    );
};
