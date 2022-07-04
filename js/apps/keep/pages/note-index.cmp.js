import { noteService } from '../services/note.service.js'
import createNote from '../cmps/note-create.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import { eventBus } from '../../../services/eventBus.service.js'


export default {
    template: `
    <section class="note-app">
            <note-filter @filterByType="setFilter"/>
            <create-note/>
        <note-list :notes="notesToShow"/>
    </section>
`,
    data() {
        return {
            notes: null,
            filter: null,
        };
    },
    created() {
        noteService.getNotes()
            .then(notes => {
                this.notes = notes
            })
        eventBus.on('eventSendMailToNote', this.addNote)
        eventBus.on('eventAddNote', this.addNote)
        eventBus.on('eventDeleteNote', this.deleteNote)
        eventBus.on('eventUpdateNote', this.updateNote)
    },
    methods: {

        addNote(note) {
            noteService.addNote(note)
                .then((note) => this.notes.unshift(note))
        },
        deleteNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === noteId)
                    this.notes.splice(idx, 1)
                })
        },
        updateNote(updatedNote) {
            noteService.save(updatedNote)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === updatedNote.id)
                    this.notes.splice(idx, 1, updatedNote)
                })
        },
        setFilter(filter) {
            this.filter = JSON.parse(JSON.stringify(filter))
        },

    },
    computed: {
        notesToShow() {
            if (!this.filter) return this.notes
            if (this.filter.noteType === '') return this.notes
            let notes = this.notes
            return notes.filter((note) => this.filter.noteType === note.noteType)
        }
    },
    unmounted() { },
    components: {
        createNote,
        noteList,
        noteFilter
    },
};