import { eventAddNote } from '../../../services/eventBus.service.js'

export default {
    template: `
    <section class="create-note">
        <div class="note-create-container">
            <input class="note-txt-input" v-model="newVal" :placeholder="placeholderText" @keyup.enter="createNote">
            <div class="note-create-btns-container">
                <button class="note-create-btn note-text-btn" @click="changeNoteType('noteText')">
                    <i class="note-create-btn-icon far fa-comment"></i>
                </button>
                <button class="note-create-btn note-img-btn" @click="changeNoteType('noteImg')">
                    <i class="note-create-btn-icon far fa-image"></i>
                </button>
                <button class="note-create-btn note-video-btn" @click="changeNoteType('noteVideo')">
                    <i class="note-create-btn-icon fab fa-youtube"></i>
                </button>
                <button class="note-create-btn note-todo-btn" @click="changeNoteType('noteTodos')">
                    <i class="note-create-btn-icon fas fa-list-ul"></i>
                </button>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            note: {
                type: 'noteText',
                noteType: 'txt',
                isPinned: false,
                info: null,
            },
            newVal: null,
        };
    },
    created() { },
    methods: {
        createNote() {
            const newNote = JSON.parse(JSON.stringify(this.note))
            const noteInfo = {
                txt: '',
                img: '',
                video: '',
                title: '',
                todos: null,
            }
            if (this.note.noteType === 'todos') noteInfo.title = this.newVal
            else if (this.note.noteType === 'video') {
                noteInfo.video = this.getId(this.newVal)
            }
            else noteInfo[this.note.noteType] = this.newVal
            newNote.info = noteInfo
            this.newVal = ''
            eventAddNote(newNote)
        },

        changeNoteType(newType) {
            this.note.type = newType
            this.note.noteType = this.infoType
        },
        getId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
            const match = url.match(regExp)
            return (match && match[2].length === 11)
                ? match[2]
                : null
        }
    },
    computed: {
        infoType() {
            switch (this.note.type) {
                case 'noteType':
                    return 'txt'
                case 'noteImg':
                    return 'img'
                case 'noteVideo':
                    return 'video'
                case 'noteTodos':
                    return 'todos'
                default:
                    return 'txt'
            }
        },

        placeholderText() {
            if (this.note.type === 'noteText') {
                return 'Write Your Note...'
            } else if (this.note.type === 'noteImg') {
                return 'Enter Image Url'
            } else if (this.note.type === 'noteVideo') {
                return 'Enter Youtube Video Url'
            } else if (this.note.type === 'noteTodos') {
                return 'Enter Todo List Title'
            }
        },
    },


    unmounted() { },
};