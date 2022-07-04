
export default {
  template: `

<section class="mail-filter">
    <input type="text" v-model='txt' @input='onFilterby' placeholder="Search Mail">
    <select v-model='read' @change='onFilterby' name="mail-state" >
       <option value="all">All</option> 
       <option value="read">Read</option>
       <option value="unread">Unread</option>

    </select>
 </section>

 `,
  data() {
    return {
        txt: "",
        read: "",
      
    }
  },
  created() {

  },
  methods: {
    onFilterby() {
      const filterBy={
        read:this.read,
        txt:this.txt || 'all',
      }
      this.$emit("filtered",filterBy)
    },

  },
  computed: {},
  unmounted() {},
}
