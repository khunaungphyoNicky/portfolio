<template>
    <div>
        <!-- <div class=" max-w-[950px] mx-auto mt-40">
            <div class="flex items-center w-full">
                <div class=" max-w-[500px]">
                    <h1 class=" font-bold text-6xl inline opacity-80">Full-Stack Web Developer</h1>
                    <img class=" w-16 inline mb-8 ml-2"
                        src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="">
                    <h1 class=" text-lg font-normal opacity-75">Hi, I'm Aung Phyo. A passionate full stack developer based
                        in Taunggyi, Myanmar. 📍
                    </h1>
                    <div class="social flex gap-4 mt-7">
                        <a href=""><i class="fa-brands fa-github text-3xl opacity-75 hover:text-blue-600 duration-200 ease-in-out"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin text-3xl opacity-75 hover:text-blue-600 duration-200 ease-in-out"></i></a>
                    </div>
                </div>
                <div class="image ml-36">
                    <div class=" w-[350px] h-[350px]">
                        <img class=" rounded-full hero_image " src="https://avatars.githubusercontent.com/u/139064963?v=4" alt="">
                    </div>
                </div>
            </div>
            <SkillPage/>
        </div> -->

        <div class=" h-screen flex justify-center items-center">
            <div>
                <div class="max-w-[950px] flex justify-center items-center w-full">
                    <div class=" max-w-[500px]">
                        <h1 class=" font-bold text-6xl inline opacity-80">Full-Stack Web Developer</h1>
                        <img class=" w-16 inline mb-8 ml-2"
                            src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="">
                        <h1 class=" text-lg font-normal opacity-75">Hi, I'm Aung Phyo. A passionate full stack developer
                            based
                            in Taunggyi, Myanmar. 📍
                        </h1>
                        <div class="social flex gap-4 mt-7">
                            <a href=""><i
                                    class="fa-brands fa-github text-3xl opacity-75 hover:text-blue-600 duration-200 ease-in-out"></i></a>
                            <a href=""><i
                                    class="fa-brands fa-linkedin text-3xl opacity-75 hover:text-blue-600 duration-200 ease-in-out"></i></a>
                        </div>
                    </div>
                    <div class="image ml-36">
                        <div class=" w-[350px] h-[350px]">
                            <img class=" rounded-full hero_image "
                                src="https://avatars.githubusercontent.com/u/139064963?v=4" alt="">
                        </div>
                    </div>
                </div>
                <SkillPage />
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
