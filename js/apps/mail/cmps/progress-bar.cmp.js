export default {
    template: `
    <section class="progress-bar">
        <div class="meter orange">
            <span class="bar" :style="barFill"></span>
            <span :class="countColor" class="counter">{{fillWidth}}%</span>
        </div>
    </section>
    `,
    computed: {
        barFill() {
            return { width: this.fillWidth + '%' }
        },
        countColor() {
            return (this.fillWidth < 50) ? 'white' : ''
        }
    },
    props: ['fillWidth']
}