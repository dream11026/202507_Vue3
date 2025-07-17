<template>
    <div>
        <h1>元件1</h1>
        <h3>{{ course }} 價格是 {{ price }}</h3>
        <button @click="course.duration = course.duration + 7">加一天課</button>
        <button @click="extraDuration">用函數加一天課</button>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
    setup() {
        const course = reactive({ name: "POOP", duration: 35 })
        const price = ref(24000)
        function extraDuration() {
            course.duration = course.duration + 7
            price.value += 5000
        }
        return { course, extraDuration, price }
    }
}
</script>

<style lang="scss" scoped></style>