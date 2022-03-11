<script setup>
import { ref } from "vue";

const h = [
  { value: "f1", text: "Header 1" },
  { value: "f2", text: "Header 2" },
  { value: "f3", text: "Header 3" },
  { value: "f4", text: "Header 4" },
];
const headers = ref(h);

const rows = ref([]);
rows.value.push({
  f1: "value1",
  f2: "value1",
  f3: "value1",
  f4: "value1",
});
rows.value.push({
  f1: "value2",
  f2: "value2",
  f3: "value2",
  f4: "value2",
});
</script>

<template>
  <div class="flex flex-col justify-items-stretch">
    <div class="flex flex-row justify-between">
      <div v-for="col in headers" class="flex-auto bg-sky-700">
        {{ col.text }}
      </div>
    </div>

    <div class="flex flex-row" v-for="row in rows">
      <div v-for="col in headers" class="border-r-8">
        {{ row[col.value] }}
      </div>
    </div>
  </div>
</template>
