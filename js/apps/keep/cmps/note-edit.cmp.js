import { eventUpdateNote } from '../../../services/eventBus.service.js'

export default {
    props: ['note'],
    template: `
    <section class="edit-note">
    <input v-model="editVal"
        @keyup.enter="updateNote"
        @key.esc="closeNoteEdit">
    <div class="edit-note-btn-container">
        <button class="edit-note-btn-update" @click="updateNote">Update Note</button>
        <button class="edit-note-btn-cancel" @click="closeNoteEdit">Cancel</button>
    </div>
    </section>
    `,
    data() {
        return {
            editVal: (this.note.noteType === 'todos') ?
                this.note.info.title : this.note.info[this.note.noteType]
        }
    },
    created() { },
    methods: {
        closeNoteEdit() {
            this.$emit('closeNoteEdit')
        },
        updateNote() {
            this.note.noteType === 'todos' ?
                this.note.info.title = this.editVal :
                this.note.info[this.note.noteType] = this.editVal
            const newNote = JSON.parse(JSON.stringify(this.note))
            eventUpdateNote(newNote)
            this.closeNoteEdit()
        },
    },
    computed: {},
    unmounted() { },
};