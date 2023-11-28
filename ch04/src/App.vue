<script>
import Component1 from "./components/component1.vue";
import Component2 from "./components/component2.vue";
import Component3 from "./components/component3.vue";
import { provide } from "vue";
/*
  날짜: 2023/11/09
  이름: 정영재
  내용: ch04, composition API

  vue 프로젝트 생성
  - option api 기반: npm init vite-app 프로젝트명
  - composition api 기반: npm init vite@latest
 */

export default {
  name: "App",
  components: {
    Component1,
    Component2,
    Component3,
  },
  setup() {
    const user1 = {
      name: "홍길동2",
      age: 235,
      addr: "부산",
    };

    // App 컴포넌트 하위 컴포넌트에서 inject 주입
    provide("user1", user1);
  },
};
</script>

<template>
  <h3>ch04. Component</h3>
  <h4>1) reactive</h4>
  <Component1 />

  <h4>2) LifeCycle Hooks</h4>
  <Component2 />

  <h4>3) Dependency Injection</h4>

  <Component3 />
</template>

<style scoped></style>
