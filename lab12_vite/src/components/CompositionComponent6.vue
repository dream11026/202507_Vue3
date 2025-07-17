<template>
    <div>
        <h1>6. 物件維持reactivity</h1>
        <p>{{ user }}</p>
        <h1>物件的屬性維持reactivity</h1>
        <p>{{ userName }}</p>
        <p>{{ age }}</p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    setup() {
        const user = reactive({
            userName: "dream",
            age: 49
        })

        console.log("reactive user=", user)
        const { userName, age } = toRefs(user)

        setTimeout(() => {
            user.userName = "一段時間更新 reactive"
            user.age += 1
        }, 2000)

        return {
            user: user,

            // 以下直接取值，reactive元件
            userName: userName,
            age: age
        }
    }
}
</script>

<style lang="scss" scoped></style>