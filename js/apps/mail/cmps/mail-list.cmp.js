import mailPreview from "../cmps/mail-preview.cmp.js"


export default {
  props: ["emails"],
  template: `
 <section  class="email-list-container">
    <ul>
        <li v-for="email in emails" class="email-line" >
           <mail-preview :email="email" ></mail-preview>
        </li>
    </ul>
 </section>





`,
  components: {
    mailPreview,
      },

  data() {
    return {
      isMailShowSammery: false,//extend
      selectedEmailId: null,
  
    }
  },
  created() {
  },
  methods: {
 
  },
  computed: {},
  unmounted() {},
}
