export default {
      name:'home-page',

    template: `
    <section class="home-page-container">
        <section class="hero-section">
            <div class="hero-img">
            <img :src="imgUrl">
                <h1 class="hero-title">AppSus By Alen Chernick & Alon Kolker</h1>
            </div>
            </section>
    </section>
    <section class="home-page-body">

    </section>
    `,
    data() {
        return {
            imgUrl: 'img/logo.png',
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};