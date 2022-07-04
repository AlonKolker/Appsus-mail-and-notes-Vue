import { eventBus } from '../services/eventBus.service.js'

export default {
    template: `
    <section v-if="msg" class="user-msg" :class="msg.type">
        <p>{{msg.txt}}</p>
        <router-link v-if="msg.link" class="msg-link" :to="msg.link">
            {{msg.linkTxt}}
        </router-link>
    </section>
    `,
    data() {
        return {
            unsubscribe: null,
            msg: null
        };
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 3000)
        }
    },
    computed: {},
    destroyed() {
        this.unsubscribe()
    },
};
