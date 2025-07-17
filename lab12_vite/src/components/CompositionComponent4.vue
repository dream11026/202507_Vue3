<template>
    <div>
        <h1>4. reactive參照到物件</h1>
        <p>{{ user }}</p>
        <p>userName:{{ user.userName }},age:{{ user.age }}</p>
        <h1>如果不是reactive的就不會變</h1>
        <p>{{ pUserName }},{{ pAge }}</p>
    </div>
</template>

<script>
import { reactive, isRef, isReactive } from 'vue';

export default {
    setup() {
        const user = reactive({
            userName: "dream",
            age: 49
        })

        console.log("user is reactive?", isReactive(user))
        console.log("user is ref?", isRef(user))
        console.log("user.userName is reactive?", isReactive(user.userName))
        console.log("user.age is reactive?", isReactive(user.age))

        setTimeout(() => {
            user.userName = "一段時間更新 reactive"
            user.age += 1
        }, 2000)

        return {
            user: user,

            // 以下直接取值，reactive元件
            pUserName: user.userName,
            pAge: user.age
        }
    }
}
</script>

<style lang="scss" scoped></style>