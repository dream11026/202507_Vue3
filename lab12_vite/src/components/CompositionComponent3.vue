<template>
    <div>
        <h1>3. ref參照到物件</h1>
        <p>{{ user }}</p>
        <p>userName:{{ user.userName }},age:{{ user.age }}</p>
        <h1>如果不是reactive的就不會變</h1>
        <p>{{ pUserName }},{{ pAge }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const user = ref({
            userName: "dream",
            age: 49
        })
        setTimeout(() => {
            user.value.userName = "一段時間更新 ref"
            user.value.age += 1
        }, 2000)
        return {
            user: user,

            // 以下.value直接取值，非reactive元件
            pUserName: user.value.userName,
            pAge: user.value.age
        }
    }
}
</script>

<style lang="scss" scoped></style>