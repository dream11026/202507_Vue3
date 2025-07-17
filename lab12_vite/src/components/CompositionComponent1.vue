<template>
    <div>
        <h1>1. Composition Component1</h1>
        <h3>userName:{{ userName }}</h3>
        <p>age:{{ age }}</p>
        <h3>userName2:{{ userName2 }}</h3>
    </div>
</template>

<script>
import { ref, isRef, isReactive } from 'vue'

export default {
    setup() {

        let userName = "dream"
        let userName2 = ref("dream")
        let currentAge = ref(49)
        console.log("userName type:", typeof userName, userName)
        console.log("userName2 type:", typeof userName2, userName2)

        console.log("userName is ref?", isRef(userName))
        console.log("userName2 is ref?", isRef(userName2))
        console.log("userName2.value is ref?", isRef(userName2.value))
        console.log("userName is reactive?", isReactive(userName))
        console.log("userName2 is reactive?", isReactive(userName2))
        console.log("userName2.value is reactive?", isReactive(userName2.value))

        setTimeout(() => {
            userName = "一段時間更新"
            userName2.value = "一段時間更新 ref"
            currentAge.value += 1

            console.log("userName type:", typeof userName, userName)
            console.log("userName2 type:", typeof userName2, userName2)
        }, 2000)
        return { userName, userName2, age: currentAge }
    }
}
</script>

<style lang="scss" scoped></style>