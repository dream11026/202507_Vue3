// vue 2 keyword -> new Vue, el
var vue = new Vue({
    el: '#myapp',
    data() {
        return {
            plans: [],
            value: ''
        }
    },
    methods: {
        addPlan() {
            this.plans.push(this.value)
            this.value = ""
        }
    }
})

// vue 3
// const { createApp } = Vue
// createApp({
//     // Vue.createApp({
//     data() {
//         return {
//             plans: [],
//             value: ''
//         }
//     },
//     methods: {
//         addPlan() {
//             this.plans.push(this.value)
//             this.value = ""
//         }
//     }
// }).mount('#myapp');