import { eventBus, eventDeleteNote, eventUpdateNote, eventAddNote, eventSendNoteToMail } from '../../../services/eventBus.service.js'
import { utilService } from '../../../services/util.service.js'
import { mailService } from '../../mail/services/mail.service.js'
import noteColorSelect from '../cmps/note-color-select.cmp.js'

export default {
    props: ['note'],
    template: `
    <section class="note-menu">
        <button class="note-menu-btn note-menu-pin-btn" :class="pinned"  @click="pinnedToggle"><i class="fa-solid fa-thumbtack"></i></button>
        <div class="note-menu-color-btn-container">
            <button class="note-menu-btn note-menu-color-btn"><i class="fa-solid fa-palette"></i></button>
            <note-color-select class="note-color-select" @colorChanged="changeNoteColor"/>
        </div>
        <button class="note-menu-btn note-menu-email-btn" @click="sentToMail"><i class="fa-solid fa-envelope"></i></button>
        <button class="note-menu-btn note-menu-edit-btn" @click="editNote"><i class="fa-solid fa-pen-to-square"></i></button> 
        <button class="note-menu-btn note-menu-clone0-btn" @click="duplicateNote"><i class="fa-solid fa-clone"></i></button>
        <button class="note-menu-btn note-menu-trash-btn" @click="deleteNote"><i class="fa-solid fa-trash"></i></button>
        </section>
    `,
    data() {
        return {
        };
    },
    created() { },
    methods: {
        deleteNote() {
            eventDeleteNote(this.note.id)
        },
        pinnedToggle() {
            const newNote = JSON.parse(JSON.stringify(this.note))
            newNote.isPinned = !newNote.isPinned
            eventUpdateNote(newNote)
        },
        changeNoteColor(color) {
            const newNote = JSON.parse(JSON.stringify(this.note))
            newNote.style.backgroundColor = '#' + color
            eventUpdateNote(newNote)
        },
        editNote() {
            this.$emit('openNoteEdit')
        },
        duplicateNote() {
            const newNote = JSON.parse(JSON.stringify(this.note))
            eventAddNote(newNote)
        },
        sentToMail() {
            const newNote = JSON.parse(JSON.stringify(this.note))
            let emailBody = newNote.info[newNote.noteType]
            if (newNote.noteType === 'todos') {
                emailBody = newNote.info.title + ' '
                let todosTxt = newNote.info.todos.map((todo, idx) => {
                    return idx + 1 + '. ' + todo.txt + '. '
                }).join('')
                emailBody += todosTxt
            }
            const email = {
                id: utilService.makeId(),
                name: 'KeepApp',
                subject: 'Note From Keep App',
                body: emailBody,
                to: "",
                createdAt: utilService.getFormattedNowDate(),
                isRead: false,
                state: 'inbox',
                cc: null,
                bbc: null,
                isStar: false,
            }

            mailService.getMailFromNote(email)
            eventSendNoteToMail(email)
            eventBus.emit('show-msg', { txt: 'Note Sended To Email Successfully', link: '/mail', linkTxt: 'Check It' })
        }
    },
    computed: {
        pinned() {
            return { pinned: this.note.isPinned }
        },
    },
    unmounted() { },
    components: {
        noteColorSelect
    }
};