<template>
  <div>
    <nav class=" bg-white shadow-md shadow-gray-200 py-6 px-12 text-black flex justify-between fixed top-0 w-full z-10 border border-b">
      <div class="logo">
        <h1 class=" font-bold text-[22px] opacity-90">Aungphyo</h1>
      </div>
      <div class="menu flex gap-6 font-bold text-[18px] opacity-80">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Project</a>
        <a href="">Contact</a>
      </div>
    </nav>
    <HomePage/>
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";
    export default {
        name: 'App',
        components: {
          HomePage,
        },
    }
</script>


