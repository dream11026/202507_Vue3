const app = Vue.createApp({
    data() {
        return {
            issue: 'default issue',
            counter: 0
        }
    },
    methods: {
        // 透過 v-mode 就不需要setIssue
        // setIssue(e) {
        //     this.issue = e.target.value
        // },
        resetIssue() {
            this.issue = ''
        },
        increase() {
            this.counter += 1;
        }
        // computed function
        // 移至 computed 區塊，避免render cycle
        // ,formatIssue() {
        //     console.log("計算formatIssue", this.issue)
        //     if (this.issue === "") {
        //         return ""
        //     }
        //     return `[!!]${this.issue}`
        // },
    },
    computed: {
        formatIssue() {
            console.log("計算formatIssue", this.issue)
            if (this.issue === "") {
                return ""
            }
            return `[!!]${this.issue}`
        }
    },
    watch: {
        counter(v) {
            if (v > 10) {
                this.counter = 0;
                console.log("counter reset")
            }
        }
    }
})
app.mount('#app')