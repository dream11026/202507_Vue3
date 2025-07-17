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
        // define reactive variable
        const user = reactive({
            userName: "dream",
            age: 49
        })

        // operate the reactive object
        setTimeout(() => {
            user.userName = "一段時間更新 reactive"
            user.age += 1
        }, 2000)

        return { user, ...toRefs(user) }
    }
}
</script>

<style lang="scss" scoped></style>