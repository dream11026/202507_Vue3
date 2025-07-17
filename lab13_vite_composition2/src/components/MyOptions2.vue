<template>
    <div>
        <h1>options API的生命周期</h1>
    </div>
</template>

<script>
export default {
    created() {
        console.log("MyOptions2 created 也幾乎是初始化之後")
    },
    mounted() {
        console.log("MyOptions2 mounted 掛載元件之後")
    },
    beforeUnmount() {
        console.log("MyOptions2 beforeUnmount 即將移除元件")
    }
}
</script>

<style lang="scss" scoped></style>