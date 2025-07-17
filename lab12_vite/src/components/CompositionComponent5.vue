<template>
    <div>
        <h1>5. reactive參照到物件....</h1>
        <p>{{ user }}</p>
        <h1>toRefs的ref參照到物件的屬性</h1>
        <p>{{ userName }}</p>
        <p>{{ age }}</p>
    </div>
</template>

<script>
import { reactive, isRef, toRefs } from 'vue';

export default {
    setup() {
        const user = reactive({
            userName: "dream",
            age: 49
        })

        console.log("reactive user=", user)
        // const userReactiveToRefs = toRefs(user)
        // console.log(" after torefs, ", userReactiveToRefs)
        // console.log("user底下的userName包裝後是ref嗎?", isRef(userReactiveToRefs.userName))
        // console.log("user底下的age包裝後是ref嗎?", isRef(userReactiveToRefs.age))
        const { userName, age } = toRefs(user)

        setTimeout(() => {
            user.userName = "一段時間更新 reactive"
            user.age += 1
            setTimeout(() => {
                userName.value = "第二段時間更新 toRefs"
                age.value += 5
            }, 2000)
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