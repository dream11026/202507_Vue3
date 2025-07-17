<template>
    <div>
        <h1>5. reactive參照到物件</h1>
        <p>{{ user }}</p>
        <p>userName:{{ user.userName }},age:{{ user.age }}</p>
        <h1>如果不是reactive的就不會變</h1>
        <p>{{ pUserName }},{{ pAge }}</p>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const user = reactive({
            userName: "dream",
            age: 49
        })

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