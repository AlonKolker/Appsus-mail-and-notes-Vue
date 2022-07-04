const { createApp } = Vue
import { router } from './router.js'
import appHeader from './cmps/app-header.cmp.js'
import appHomePage from './pages/app-home.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
    template: `
    <section class="app-sus-main">
        <app-header/>
        <user-msg/>
        <router-view/>
    </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        appHeader,
        appHomePage,
        userMsg
    },
};

const app = createApp(options)
app.use(router)
app.mount('#app')