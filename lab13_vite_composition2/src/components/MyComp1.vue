<template>
    <div>
        <h1>元件1</h1>
        <h3>{{ course }} 價格是 {{ price }}</h3>
        <h3>{{ courseDisplayName }}</h3>
        <button @click="course.duration = course.duration + 7">加一天課</button>
        <button @click="extraDuration">用函數加一天課</button>
        <hr />
        <!-- <input placeholder="courseId" @input="setCourseId" />
        <input placeholder="courseFullName" @input="setCourseFullName" /> -->
        <input placeholder="courseId" v-model="courseId" />
        <input placeholder="courseFullName" v-model="courseFullName" />
        <hr />
        <input type="text" placeholder="alternative course full name" ref="courseFullNameInput">
        <button @click="setCourseFullNameInput">set course full name</button>
    </div>
</template>

<script>
import { reactive, ref, computed, watch } from 'vue'
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

        // function setCourseId(e) {
        //     courseId.value = e.target.value
        // }

        // function setCourseFullName(e) {
        //     courseFullName.value = e.target.value
        // }

        // HOF(High Order Function) 使用 computed 轉換函數
        const courseDisplayName = computed(function () {
            return courseId.value + '../..' + courseFullName.value
        })

        watch(price, function (newValue, oldValue) {
            console.log(`price goes from ${oldValue} to ${newValue}`)
        })

        // ref: 從 input 參照輸入內容，再將輸入值取出
        const courseFullNameInput = ref()

        function setCourseFullNameInput() {
            // 從input元件取值，兩次value
            // 第一次value 是 input
            // 第二次value 是 input 的輸入值
            courseFullName.value = courseFullNameInput.value.value
        }

        return {
            course, extraDuration, price,
            courseDisplayName,
            // setCourseId,
            // setCourseFullName,
            courseId, courseFullName,
            courseFullNameInput, setCourseFullNameInput
        }
    }
}
</script>

<style lang="scss" scoped></style>