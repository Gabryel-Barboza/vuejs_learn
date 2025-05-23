<template>
  <div>
    <span>{{ title }}</span>
    <span>{{ completionDate }}</span>
    <span>{{ isFinished }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  completionDate: String,
  isFinished: Boolean,
});
</script>
<style></style>
