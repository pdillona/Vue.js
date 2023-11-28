<script>
import MyComponent4 from "./MyComponent4.vue";

export default {
  name: "MyComponent3",
  components: { MyComponent4 }, // 자식 컴포넌트를 사용 하려면 components에 자식 컴포넌트를 정의해 준다.
};
</script>
<template>
  <h4>MyComponent3</h4>
  <p>부모 컴포넌트</p>

  <MyComponent4 />
</template>
<style scoped>
h4 {
  color: greenyellow;
}
</style>
<!-- template style script 순서 상관 없음 -->
