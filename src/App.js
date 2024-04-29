import {observer} from "mobx-react";
import {NewNoteForm} from "./components/NewNoteForm/NewNoteForm";
import {useNotesStore} from "./hooks/Notes";
import './App.css';

const App = observer(() => {
    const notesStore = useNotesStore();

    return (
        <>
            {notesStore.notes.map(note => (
                <li key={note.id} onClick={() => notesStore.removeNote(note.id)}>
                    {note.text}
                </li>
            ))}
            <NewNoteForm/>
        </>
    );
});

export default App;
