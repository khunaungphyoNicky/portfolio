<template>
  <div class=" scroll-smooth bg-slate-100">
    <div v-if="status" class="w-full h-screen bg-white flex flex-col gap-10 justify-center items-center z-20 fixed font-medium text-2xl duration-300 ease">
      <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#home" @click="close()">Home</a>
        <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#about" @click="close()">About</a>
        <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#project" @click="close()">Project</a>
        <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#contact" @click="close()">Contact</a>
        <div class=" font-normal text-[29px] absolute top-6 right-12 close" @click="close()">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
    <nav class=" bg-white shadow-md shadow-gray-200 items-center nav-bar h-[80px] py-6 px-12 text-black flex justify-between fixed top-0 w-full z-10">
      <div class="logo">
        <a href="#home"><h1 class=" font-bold text-[22px] opacity-80 cursor-pointer">Aungphyo</h1></a>
      </div>
      <div class="menu flex gap-6 font-bold text-[18px] opacity-80">
        <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#home">Home</a>
        <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#about">About</a>
        <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#project">Project</a>
        <a class="hover:text-[#147EFB] duration-200 ease-in-out" href="#contact">Contact</a>
      </div>
      <div class=" bar hidden font-bold text-[22px] opacity-80" @click="menu()">
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
        data() {
          return {
            status: false
          }
        },
        methods: {
          menu() {
            this.status = true
          },
          close(){
            this.status = false
          }
        },
    }
</script>


