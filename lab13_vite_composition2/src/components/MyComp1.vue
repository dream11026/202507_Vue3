<template>
    <div>
        <h1>元件1</h1>
        <h3>{{ course }} 價格是 {{ price }}</h3>
        <h3>{{ courseDisplayName }}</h3>
        <button @click="course.duration = course.duration + 7">加一天課</button>
        <button @click="extraDuration">用函數加一天課</button>
        <hr />
        <input placeholder="courseId" @input="setCourseId" />
        <input placeholder="courseFullName" @input="setCourseFullName" />
    </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
export default {
    setup() {
        const course = reactive({ name: "POOP", duration: 35 })
        const price = ref(24000)
        function extraDuration() {
            course.duration = course.duration + 7
            price.value += 5000
        }

        const courseId = ref("")
        const courseFullName = ref("")

        function setCourseId(e) {
            courseId.value = e.target.value
        }

        function setCourseFullName(e) {
            courseFullName.value = e.target.value
        }

        // HOF(High Order Function) 使用 computed 轉換函數
        const courseDisplayName = computed(function () {
            return courseId.value + '../..' + courseFullName.value
        })
        
        return {
            course, extraDuration, price,
            courseDisplayName,
            setCourseId,
            setCourseFullName
        }
    }
}
</script>

<style lang="scss" scoped></style>