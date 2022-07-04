export default {
    template: `
 <header class="app-header">
     <nav class="app-nav">
        <div class="app-logo">
            <img :src="imgUrl" @click="goToHomePage">
        </div>
        <div class="nav-wrapper">
                <button  @click="toggleMenu = !toggleMenu" class="menu-open-btn"><i class="fa-solid fa-bars"></i></button>
                <transition>  
                    <div v-if="toggleMenu" class="app-navigation">
                        <router-link class="nav-anchor home-page-anchor" to="/">Home Page<i class="fa-solid fa-house"></i></router-link>
                        <router-link class="nav-anchor mail-page-anchor" to="/mail">Mail<i class="fa-solid fa-envelope"></i></router-link>
                        <router-link class="nav-anchor mail-page-anchor" to="/keep">Keep<i class="fa-solid fa-note-sticky"></i></router-link>
                        <router-link class="nav-anchor mail-page-anchor" to="/keep">About<i class="fa-solid fa-id-card-clip"></i></router-link>
                    </div>
                </transition>
            
        </div>
    </nav>
 </header>
`,
    data() {
        return {
            imgUrl: 'img/logo.png',
            toggleMenu: false,
        };
    },
    created() { },
    methods: {
        goToHomePage() {
            this.$router.push('/')
        }
    },
    computed: {},
    unmounted() { },
};