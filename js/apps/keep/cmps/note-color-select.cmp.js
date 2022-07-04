
export default {
    template: `
    <section>
        <div class="note-colors-palette palette-white" @click="changeColor('fdfdfd')"></div>
        <div class="note-colors-palette palette-red" @click="changeColor('ff8888')"></div>
        <div class="note-colors-palette palette-orange" @click="changeColor('ffcc88')"></div>
        <div class="note-colors-palette palette-yellow" @click="changeColor('ffff88')"></div>
        <div class="note-colors-palette palette-green" @click="changeColor('ccff99')"></div>
        <div class="note-colors-palette palette-blue" @click="changeColor('aaffee')"></div>
        <div class="note-colors-palette palette-purple" @click="changeColor('ddbbff')"></div>
    </section>
    `,
    data() {
        return {};
    },
    created() { },
    methods: {
        changeColor(color) {
            this.$emit('colorChanged', color)
        }
    },
    computed: {},
    unmounted() { },
};