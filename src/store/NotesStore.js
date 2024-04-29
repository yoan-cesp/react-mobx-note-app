import {makeAutoObservable} from 'mobx';
import {nanoid} from 'nanoid';

class NotesStore {
    notes = [];

    constructor() {
        makeAutoObservable(this);
    }

    addNote = (text) => {
        this.notes.push({
            text,
            id: nanoid(),
        });
    }

    removeNote = (id) => {
        this.notes = this.notes.filter(note => note.id !== id);
    }
}

const notesStore = new NotesStore();

export default notesStore;
