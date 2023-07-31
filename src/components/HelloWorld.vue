<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from "@/store/index";
defineProps<{ msg: string }>()


const counterStore = useCounterStore();
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
      <p>{{ counterStore.count }}</p>
      <p>{{ counterStore.double }}</p>
    </div>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
