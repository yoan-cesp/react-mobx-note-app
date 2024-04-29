import {autorun, makeAutoObservable, reaction, when} from 'mobx';
import {nanoid} from 'nanoid';

class NotesStore {
    notes = [];

    constructor() {
        makeAutoObservable(this);
        // print the number of notes and their text when the notes array changes
        autorun(() => {
            console.log(`There are ${this.notes.length} notes.`);
            this.notes.forEach(note => {
                console.log(`Note: ${note.text} (ID: ${note.id})`);
            });
        });

        // show an alert when the number of notes exceeds 10
        // the reactions defines a side effect that will be executed when the notes array changes
        reaction(
            () => this.notes.length,
            length => {
                if (length > 10) {
                    alert('Limit reached!');
                }
            }
        );

        // listen to the changes matching with the expected condition
        when(
            () => this.notes.length > 0,
            () => {
                console.log('First note added!... saving notes to local storage');
                localStorage.setItem('notes', JSON.stringify(this.notes));
            }
        );
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
