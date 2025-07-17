<template>
  <div>
    <h1>composition component practices</h1>
    <h3>{{ userName }}</h3>

    <!-- 指定只有一種命名 -->
    <composition-component1></composition-component1>
    <hr />

    <!-- camel case -->
    <CompositionComponent2></CompositionComponent2>
    <!-- kebab  case -->
    <!-- <composition-component2></composition-component2> -->

    <hr />
    <composition-component3></composition-component3>
    <hr/>
    <composition-component4></composition-component4>
  </div>
</template>

<script>
import CompositionComponent1 from './components/CompositionComponent1.vue'
import CompositionComponent2 from './components/CompositionComponent2.vue'
import CompositionComponent3 from './components/CompositionComponent3.vue'
import CompositionComponent4 from './components/CompositionComponent4.vue'

export default {
  components: {
    //CompositionComponent1,
    "composition-component1": CompositionComponent1, // 指定只有一種命名
    CompositionComponent2, // 內建支援兩種 命名方式
    CompositionComponent3,
    CompositionComponent4
  },
  data() {
    return {
      userName: "dream"
    }
  }
}
</script>

<style lang="scss" scoped></style>