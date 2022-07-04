import { noteText, noteImg, noteTodos, noteVideo } from '../cmps/note-template.cmp.js'
import noteMenu from '../cmps/note-menu.cmp.js'
import noteEdit from '../cmps/note-edit.cmp.js'

export default {
    props: ['note'],
    template: `
  <section v-if="note" class="note-preview">
        <div class="note-type-container" :style="noteBackgroundColor">
            <component :is="note.type"
            :class="note.type"
            :note="note">
            </component>
        </div>
        <note-menu :note="note" @openNoteEdit="toggleNoteEdit"/>
        <note-edit :note="note" v-if="isNoteEdit" @closeNoteEdit="closeNoteEdit"/>
    </section>
    `,
    data() {
        return {
            isNoteEdit: false,
        }
    },
    created() { },
    methods: {
        openNoteEdit() {
            this.isNoteEdit = true
        },
        closeNoteEdit() {
            this.isNoteEdit = false
        },
        toggleNoteEdit() {
            this.isNoteEdit = !this.isNoteEdit
        }
    },
    computed: {
        noteBackgroundColor() {
            return { backgroundColor: this.note.style.backgroundColor }
        },
    },
    unmounted() { },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteVideo,
        noteMenu,
        noteEdit
    },
};