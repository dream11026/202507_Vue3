<template>
    <div>
        <h1>Composition Component2 in script setup</h1>
        <h1>Dom會一起刷新</h1>
        <h3>userName:{{ userName }}</h3>

        <!-- script setup 方式 沒有另外return 更換變數名稱 -->
        <p>age:{{ currentAge }}</p>

        <h3>userName2:{{ userName2 }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let userName = "dream"
let userName2 = ref("dream")
let currentAge = ref(49)

console.log("userName type:", typeof userName, userName)
console.log("userName2 type:", typeof userName2, userName2)
setTimeout(() => {
    userName = "一段時間更新" // 因dom刷新，而一起更新，本身不適reactive物件
    userName2.value = "一段時間更新 ref"
    currentAge.value += 1

    console.log("userName type:", typeof userName, userName)
    console.log("userName2 type:", typeof userName2, userName2)
}, 2000)
</script>

<style lang="scss" scoped></style>