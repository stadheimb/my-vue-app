<script setup>
import lineStore from "../stores/lineStore";

function addLine(cmd) {
  lineStore.addLine("Another one from " + cmd);
}
</script>

<template>
  <div>
    <h1>Hello</h1>
    <div
      class="rounded-full h-6 w-12 text-center bg-blue-600 cursor-pointer border-red-300 border-2"
    >
      <a @click="addLine" class="link">Add</a>
    </div>
    <div v-for="(line, i) in lineStore.lines" :key="i">
      {{ line }}
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
