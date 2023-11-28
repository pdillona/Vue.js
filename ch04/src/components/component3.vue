<template>
  <h4>Component3</h4>
  <Component4 />
  <p></p>
</template>

<script setup>
import Component4 from "./component4.vue";
import { provide } from "vue";

const user2 = {
  name: "홍길동",
  age: 23,
  addr: "부산",
};

provide("user2", user2);
</script>

<style scoped></style>
