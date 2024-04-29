import {useContext} from "react";
import {NotesStoreContext} from "../storeContext/NotesContext";

export const useNotesStore = () => useContext(NotesStoreContext);
