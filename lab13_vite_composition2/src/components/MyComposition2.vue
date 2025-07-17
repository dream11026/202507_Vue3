<template>
    <div>
        <h1>composition API的生命周期</h1>
    </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        console.log("MyComposition2 setup 元件初始化")

        onMounted(() => {
            console.log("MyComposition2 onMounted api掛載之後")
        })

        onBeforeUnmount(() => {
            console.log("MyComposition2 onBeforeUnmount 即將移除元件")
        })

        return {}
    }
}
</script>

<style lang="scss" scoped></style>