import mailExtend from "./mail-extend.js"
import longText from "./long-text.cmp.js"
import { updateIsRead, addStar } from "../../../services/eventBus.service.js"
import { eventBus } from "../../../services/eventBus.service.js"

export default {
  props: ["email"],
  template: `
 <section>

     
    <div class="email-preview"   @click="isExtend=!isExtend, onRemoveRead(email.id)">
      <div class="star" :class="addStarColor" @click='onAddStar(email.id)'><i class="fa-solid fa-star"></i></div>
           <div v-bind:class='ifReadColor'> {{email.name}} </div>
              <div v-bind:class='ifReadColor'> {{email.subject}} </div>
                <long-text v-bind:class='ifReadColor' :text="email.body"></long-text>
       <div> {{email.createdAt}} </div>
         </div>
      <mail-extend v-if="isExtend"  :email='email' ></mail-extend>


 </section>
`,
  components: {
    mailExtend,
    longText,
  },

  data() {
    return {
      isExtend: false,
    }
  },
  created() {
    eventBus.on("closeExtendForUnread", this.closeExtendForUnread) //When user click on makeUnred->close extended
  },
  methods: {
    onRemoveRead(emailId) {
      updateIsRead(emailId)
    },
    closeExtendForUnread() {
      this.isExtend = false
    },
    onAddStar(emailId) {
      addStar(emailId)
    },
  },
  computed: {
    ifReadColor() {
      return {
        'readed': this.email.isRead === true,
        "un-readed": this.email.isRead === false,
      }
    },
    onExtend() {
      return true
    },
    addStarColor() {
      return {
        "is-star-on": this.email.isStar,
        // 'is-star-off': !this.email.isStar,
      }
    },
  },
  watch: {
    // isExtend(){
    //   if(isExtend){
    //     updateIsRead(this.email.id)
    //   }
    // }
  },
  unmounted() {},
}
