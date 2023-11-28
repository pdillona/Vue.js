<style scoped></style>
<!-- 스코프는 범위를 지정해 준다. -->
<template>
  <h4>data 옵션</h4>
  <p>
    이름: {{ name }}<br />
    나이: {{ age }}<br />
    주소: {{ addr }}<br />
  </p>
</template>
<script>
export default {
  name: "OptionComponent1",

  // 컴포넌트에서 사용할 데이터(상태 값 이라 부름) 선언을 위한 속성.
  data() {
    //json형태로 리턴
    return {
      name: "홍길동",
      age: 21,
      addr: "부산",
    };
  },
};
</script>
