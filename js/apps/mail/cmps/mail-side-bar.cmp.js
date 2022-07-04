import {
  newMail,
} from "../../../services/eventBus.service.js"

export default {
  props: ["emails"],
  template: `
 <section class="mail-side-bar flex flex-column space-evenly" v-if='emails'>

    <div @click="onNewMail" class="compose-btn"><i class="fa-solid fa-plus"></i> Compose</div>
    <div  @click="filter('inbox')" class="inbox-btn side-bar-btns">  <i class="fa-solid fa-inbox"></i> {{spaceStr}} {{CountunReaden}}</div>
    <div  @click="filter('stared')" class="starred-btn side-bar-btns"><i class="fa-solid fa-star"></i>{{spaceStr1}} Starred {{ CountunStar}}</div>
    <div  @click="filter('sent')" class="sent-btn side-bar-btns"><i class="fa-solid fa-share-from-square"></i>{{spaceStr}} Sent  {{CountunSent}} </div>
    <div  @click="filter('draft')" class="Draft side-bar-btns"><i class="fa-brands fa-firstdraft"></i> {{spaceStr2}} Draft {{CountunDraft}}</div>
  
</section>
`,
  components: {},
  data() {
    return {
      unReaded: 0,
      sent: 0,
      star: 0,
      spaceStr: `\xa0\xa0\xa0\xa0\xa0\xa0`,
      spaceStr1: `\xa0\xa0\xa0\xa0\xa0`,
      spaceStr2: `\xa0\xa0\xa0\xa0\xa0\xa0\xa0`,
    }
  },
  created() {},
  methods: {
    onNewMail() {
      newMail("newMail") //eventbus
    },
    filter(state) {
      let filterBy

      if (state === "stared") {
        filterBy = {
          stared: true,
          state: "",
        }
      }else{
        filterBy = {
          stared: false,
          state,
        }
      }
      this.$emit('filtered',filterBy)
    },
  },
  computed: {
    CountunReaden() {
      return (
        "Inbox " + this.emails.filter((email) => email.state === "inbox").length
      )
    },
    CountunSent() {
      return this.emails.filter((mail) => mail.state === "sent").length
    },
    CountunStar() {
      return this.emails.filter((mail) => mail.isStar === true).length
    },
    CountunDraft() {
      return this.emails.filter((mail) => mail.state === "draft").length
    },
  },

  unmounted() {},
}
