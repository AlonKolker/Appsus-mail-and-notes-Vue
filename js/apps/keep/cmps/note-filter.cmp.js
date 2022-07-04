export default {
    template: `
    <section class="note-filter">
        <label>Filter Notes By :</label>
        <select v-model="filterBy.noteType" class="filter-options" @change="filterByType">
            <option class="note-filter-all" value="">All Notes</option>
            <option class="note-filter-txt" value="txt">Text</option>
            <option class="note-filter-image" value="img">Image</option>
            <option class="note-filter-video" value="video">Video</option>
            <option class="note-filter-todo" value="todos">Todo</option>
        </select>
    </section>
        `,
    data() {
        return {
            filterBy: {
                noteType: ''
            }
        };
    },
    created() { },
    methods: {
        filterByType() {
            this.$emit('filterByType', this.filterBy)
        }
    },
    computed: {},
    unmounted() { },
};