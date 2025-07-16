// vue 3 keyword -> setup, ref
const { createApp, ref } = Vue
const app = createApp({
    // composition API
    setup() {
        console.log("vue object會在此創建")
        const plans = ref([])
        const value = ref('')

        // // test ref 3秒後變資料
        // setTimeout(() => {
        //     plans.value.push("HAHA")

        //     setTimeout(() => {
        //         plans.value.push("HAHAHA")
        //     }, 3000)
        // }, 3000)

        function addPlan() {
            plans.value.push(value.value)
            value.value = ""
        }
        
        return {
            plans: plans,
            value: value,
            addPlan: addPlan
        }
    }
}).mount('#myapp')