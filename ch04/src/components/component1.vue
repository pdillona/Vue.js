<template>
  <h4>Component1</h4>
  <p>
    message1: {{ message1 }}<br />
    <button @click="changeMessage1">수정</button>
  </p>

  <p>
    message2: {{ message2 }}<br />
    <button @click="changeMessage2">수정</button>
  </p>
  <p>
    user: {{ user2.name }}/ {{ user2.age }}/ {{ user2.addr }}
    <button @click="changeUser2">수정</button>
  </p>
  <p>
    user: {{ user1.name }}/ {{ user1.age }}/ {{ user1.addr }}
    <button @click="changeUser1">수정</button>
  </p>

  <p>
    myValue: {{ myValue }} / myValue2x: {{ myValue2x }}
    <button @click="addMyValue">증가</button>
  </p>
</template>

<script>
import { reactive, ref, computed, watch } from "vue";
export default {
  name: "component1",

  /*
    setup()
    - Composition API를 서술하기 위한 API
    - 기존 Options API data(), methods, computed 통합

    ref
      - 기본형 변수의 반응성을 부여하는 Composition API
    reactive
      - 참조형 변수(객체)에 반응성을 부여하는 Composition API
  */

  setup() {
    //data, method 합친 버전이 setup

    //상태값 선언(반응성은 없음 즉 값이 안변함)
    let message1 = "Hello";
    let user1 = {
      //객체는 reactive가 적용된다. 라고 알았는데 아임. 걍 reactive를 붙여 줘야함. {}로 객체를 표시함
      // 왜인지는 모르나 user1버튼 누르고 user2누르면 누적된 횟수만큼 한번에 바뀜 왜인지는 모름.
      name: "김유신",
      age: 50,
      addr: "대구",
    };

    //상태값 선언(반응성 있음)
    let message2 = ref("Hello");
    let user2 = reactive({
      name: "김춘추",
      age: 21,
      addr: "부산",
    });

    const myValue = ref(10);

    // computed: 상태값을 자동으로 계산해서 변환
    const myValue2x = computed(() => {
      return myValue.value * 2;
    });

    // watch: 상태값을 감지해서 콜백함수 실행
    watch(myValue, (current, prev) => {
      //myvalue가 바뀌는걸 검사해서 callback함수 () => {} current 이전 prev 현재값 을 받아 처리
      console.log(`이전값, 현재값: ${prev}, ${current}`);
    });

    const changeMessage1 = function () {
      message1 = "Welcome";
    };
    const changeMessage2 = function () {
      message2.value = "Welcome"; // 반응형 변수에는 .value를 붙여 값 할당 해야함
    };

    const changeUser2 = () => {
      user2.age++;
      user2.addr = "경주";
    };
    const changeUser1 = () => {
      user1.age++;
      user1.addr = "경주";
    };

    const addMyValue = () => {
      myValue.value++;
    };

    return {
      message1,
      message2,
      user1,
      user2,
      myValue,
      myValue2x,
      changeMessage1,
      changeMessage2,
      changeUser1,
      changeUser2,
      addMyValue,
    };
  },
};
</script>

<style scoped></style>
