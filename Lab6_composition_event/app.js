const app = Vue.createApp({
    data() {
        return {
            counter1: 0
        }
    }
})
app.mount('#app')

const app2 = Vue.createApp({
    data() {
        return {
            counter1: 0
        }
    },
    methods: {
        increase1() {
            this.counter1 = this.counter1 + 1
        },
        decrease1: function () {
            this.counter1 = this.counter1 - 1
        }
    }
})
app2.mount('#app2')

const app3 = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: 'expeceted to...',
            urgent: '',
            checkedUrgent: '',
            counter2: 666
        }
    },
    methods: {
        increase1(step) {
            this.counter1 = this.counter1 + step
        },
        decrease1: function (step) {
            this.counter1 = this.counter1 - step
        },
        setToDo(e, prefix) {
            // this.todo = e.target.value
            this.todo = `${prefix} ${e.target.value}`
        },
        submitForm(e) {
            // toggle this to show difference
            e.preventDefault() // 可以阻止預設行為，防止submit造成整頁重刷
            alert('表單提交了!')
        },
        submitForm2(e) {
            // no preventDefault() here
            alert('表單2也提交了!')
        },
        setUrgent(e) {
            this.urgent = e.target.value
        },
        commitUrgent() {
            this.checkedUrgent = this.urgent
        },
        submitForm(e) {
            // toggle this to show difference
            e.preventDefault()
            alert('表單提交了!')
        },
        increase2(s) {
            this.counter2 = this.counter2 + s
        },
        decrease2(s) {
            this.counter2 = this.counter2 - s
        }
    }
})
app3.mount('#app3')