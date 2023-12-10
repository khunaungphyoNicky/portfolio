<template>
  <div class=" scroll-smooth bg-slate-100">
    <nav class=" bg-white shadow-md shadow-gray-200 items-center nav-bar py-6 px-12 text-black flex justify-between fixed top-0 w-full z-10">
      <div class="logo">
        <a href="#home"><h1 class=" font-bold text-[22px] opacity-80 cursor-pointer">Aungphyo</h1></a>
      </div>
      <div class="menu flex gap-6 font-bold text-[18px] opacity-80">
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="#home">Home</a>
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="#about">About</a>
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="#project">Project</a>
        <a class="hover:text-blue-600 duration-200 ease-in-out" href="#contact">Contact</a>
      </div>
      <div class=" bar hidden font-bold text-[22px] opacity-80">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
    <HomePage id="home"/>
    <AboutPage id="about"/>
    <ProjectPage id="project"/>
    <ContactPage id="contact"/>
    <CopyRight/>
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import ProjectPage from "./views/ProjectPage.vue";
import ContactPage from "./views/ContactPage.vue";
import CopyRight from "./views/CopyRight.vue";
    export default {
        name: 'App',
        components: {
          HomePage,AboutPage,ProjectPage,ContactPage,CopyRight
        },
    }
</script>


