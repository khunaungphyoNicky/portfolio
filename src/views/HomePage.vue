<template>
    <div>
        <div class=" h-screen w-full flex flex-col home-page">
            <div class="container mx-auto max-w-[1030px] px-[40px] mt-[60px] w-full">
                <div class="max-w-[950px] relative flex gap-[6.2rem] justify-center items-center w-full home h-[650px]">
                    <div class=" max-w-[500px] intro">
                        <h1 class=" font-bold text-6xl inline opacity-80 hero-title">Full-Stack Web Developer</h1>
                        <img class=" w-16 inline mb-8 ml-2 wave"
                            src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="">
                        <h1 class=" text-lg font-normal opacity-75 hero-content">Hi, I'm Aung Phyo. A passionate full stack
                            developer
                            based
                            in Taunggyi, Myanmar. 📍
                        </h1>
                        <div class="social flex gap-4 mt-7 social">
                            <a href=""><i
                                    class="fa-brands fa-github text-3xl opacity-75 hover:text-[#147EFB] duration-200 ease-in-out"></i></a>
                            <a href=""><i
                                    class="fa-brands fa-linkedin text-3xl opacity-75 hover:text-[#147EFB] duration-200 ease-in-out"></i></a>
                        </div>
                    </div>
                    <div class=" w-[350px] h-[350px] home-img">
                        <img class=" rounded-full hero_image " src="../assets/icon.png" alt="">
                    </div>
                    <div class="home-skills absolute bottom-0 left-0">
                        <SkillPage />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SkillPage from '@/components/SkillPage.vue'
export default {
    name: 'HomePage',
    components: {
        SkillPage,
    },
}
</script>
