import {useState} from "react";
import {useNotesStore} from "../../hooks/Notes";

export const NewNoteForm = () => {
    const [noteText, setNoteText] = useState('');
    const notesStore = useNotesStore();

    return <>
        <input
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={() => {
            notesStore.addNote(noteText);
            setNoteText('');
        }}>Add Note
        </button>
    </>
}
