<template>
    <div>
        <h3>Course:{{ course }}</h3>
        <h3>Price:{{ price }}</h3>
    </div>
</template>

<script>
export default {
    props: ["course", "price"],
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>