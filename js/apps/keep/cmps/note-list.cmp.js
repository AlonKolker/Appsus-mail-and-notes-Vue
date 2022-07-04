import notePreview from '../cmps/note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="note-list">
        <div class="note-preview-container" v-for="note in notes" :key="note.id" >
            <note-preview v-if="note.isPinned" :note="note"></note-preview>
        </div>
        <div class="note-preview-container" v-for="note in notes" :key="note.id" >
            <note-preview v-if="!note.isPinned" :note="note"></note-preview>
        </div>
    </section>
    `,
    components: {
        notePreview,
    },

    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}