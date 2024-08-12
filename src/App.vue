<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- <keep-alive :exclude="excludeRoute"> -->
      <component :is="Component">

      </component>
      <!-- </keep-alive> -->
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
onUnmounted(() => {
})
</script>
