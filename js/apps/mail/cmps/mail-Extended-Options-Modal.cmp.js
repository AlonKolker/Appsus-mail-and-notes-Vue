import { eventBus, updateUnRead, closeExtendForUnread, respondMail,replayMail } from "../../../services/eventBus.service.js"
import { mailService } from "../services/mail.service.js"
export default {
    props: ['emailId'],
    name: ['options-modal'],
    template: `
 <section class="extended-options-modal">
    <div @click='onReplay(emailId)'><i class="fa-solid fa-reply"></i> Replay</div>
    <div @click='onMarkUnread(emailId)'><i class="fa-solid fa-envelope" ></i> Mark as unread</div>
    <div @click="onSendMailToNotes(emailId)"><i class="fa-solid fa-share-from-square"></i>Send to notes</div>
 </section>
 
`,
    components: {

    },
    data() {
        return {};
    },
    created() { },
    methods: {
        onMarkUnread(emailId) {
            updateUnRead(emailId)
            closeExtendForUnread('closeExtendForUnread')
            this.$emit("closeOptionsModal")

        },
        onReplay(emailId) {
            respondMail('emailId', emailId)
            this.$emit("closeOptionsModal")
             replayMail(emailId)

        },
        onSendMailToNotes(emailId) {
            mailService.sendMailToNotes(emailId)
            eventBus.emit('show-msg', { txt: 'Email Sended To Notes Successfully', link: '/keep', linkTxt: 'Check It' })
            this.$emit("closeOptionsModal")

        }
    },
    computed: {},
    unmounted() { },
};