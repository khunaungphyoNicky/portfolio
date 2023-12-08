<template>
  <div>
    <nav class=" bg-white shadow-md shadow-gray-200 py-6 px-12 text-black flex justify-between fixed top-0 w-full z-10">
      <div class="logo">
        <h1 class=" font-bold text-[22px] opacity-90 cursor-pointer">Aungphyo</h1>
      </div>
      <div class="menu flex gap-6 font-bold text-[18px] opacity-80">
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="">Home</a>
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="">About</a>
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="">Project</a>
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="">Contact</a>
      </div>
    </nav>
    <HomePage/>
    <AboutPage/>
    <ProjectPage/>
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import ProjectPage from "./views/ProjectPage.vue";
    export default {
        name: 'App',
        components: {
          HomePage,AboutPage,ProjectPage
        },
    }
</script>


