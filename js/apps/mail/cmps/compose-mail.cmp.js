import { utilService } from "../../../services/util.service.js"
import { eventBus } from "../../../services/eventBus.service.js"

export default {
  props: ["sendEmail"],
  name: "compose-mail",
  emits: ["sended", "canceled"],
  template: `
 <section  class="new-mail-modal">
 <div class="mail-modal-header flex space-between">
      <div>New Message</div>
    </div>
    <form class="new-mail-content flex flex-column">
      <div class="mail-input-conteiner">
        <label for="To">To</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.name"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="mail-input-conteiner">
        <label for="Cc">Cc</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.cc"
          type="cc"
          name=""
          id=""
        />
      </div>
      <div class="mail-input-conteiner">
        <label for="Bbc">Bcc</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.bcc"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="mail-input-conteiner">
        <label for="subject">subject</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.subject"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="mail-body-input">
        <label for="mailBody"></label>
        <textarea
          class="mail-body-input"
          v-model="mailToSend.body"
          rows="26"
          cols="50"
          name=""
          id=""
        >
        </textarea>
      </div>
      <div class="send-delete-row flex space-between">
        <div  class="send-btn"  @click="this.$emit('sended',mailToSend)"><i class="fa-solid fa-paper-plane"></i></div> 

         <div class="garbage-btn"  @click="this.$emit('canceled',mailToSend)"><i class="fa-solid fa-trash-can"></i></div>
        
      </div>
    </form>

 </section>
`,
  data() {
    return {
      mailToSend: {
        name: "me",
        to: "",
        cc: null,
        bbc: null,
        subject: "",
        body: "",
        createdAt: utilService.getFormattedNowDate(),
        isRead: true,
        state: "sent",
        cc: null,
        bbc: null,
        isStar: false,
      },
    }
  },
  created() {
    eventBus.on("eventFillMailReplay", this.eventFillMailReplay) //iniialize event listener

    if (this.sendEmail) {
      this.mailToSend.name = this.sendEmail.name + '@gmail.com'
      this.mailToSend.subject =  this.sendEmail.subject 
      this.mailToSend.body = '<--------   ' + this.sendEmail.body + '   -------->'
    }
  },
  methods: {
    eventFillMailReplay(email) {
      console.log(email)
    },
  },
  computed: {},
  unmounted() {},
}
