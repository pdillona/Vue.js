<template>
  <h4>Component2</h4>
  <p>
    Count : {{ count }}
    <button @click="btnAdd">증가</button>
  </p>
</template>

<script>
import {
  reactive,
  ref,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "component2",

  /*

  */

  setup() {
    const count = ref(0);
    const btnAdd = () => {
      count.value++;
    };

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      count,
      btnAdd,
    };
  },
};
</script>

<style scoped></style>
