<template>
    <div>
        <h3>Course:{{ course }}</h3>
        <h3>Price:{{ price }}</h3>
    </div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
    // props: ["course", "price"],
    // setup() {
    //     return {}
    // }

    // 額外處理 props 內容版本
    props: ["courseId", "courseFullName", "price"],
    setup(props) {
        const course = computed(function () {
            if (props.courseFullName) {
                return `[${props.courseId}]-->${props.courseFullName}`
            } else {
                return `${props.courseId}`
            }
        })

        const price = inject("price") // 接收 provide
        return { course, price }
    }
}
</script>

<style lang="scss" scoped></style>