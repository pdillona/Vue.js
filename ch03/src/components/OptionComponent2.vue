<style scoped></style>
<!-- 스코프는 범위를 지정해 준다. -->
<template>
  <h4>methods 옵션</h4>

  <button v-on:click="btn1Click">button1</button>
  <!-- @로 생략가능 -->
  <button @:click="btn2Click">button2</button>
  <button @:click="btn3Click">button3</button>
</template>
<script>
export default {
  name: "OptionComponent2",

  // 이벤트 또는 로직 처리를 위한 함수 선언 옵션
  methods: {
    btn1Click() {
      alert("button1 click!");
    },
    btn2Click: function () {
      alert("button2 click!");
    },
    btn3Click: () => {
      alert("button3 click!");
    },
  },
};
</script>
