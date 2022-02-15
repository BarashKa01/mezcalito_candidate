<script setup>
import About from "@/components/About.vue";
</script>

<template>
  <main>
    <div class="about">
      <About />
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
