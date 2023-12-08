<template>
    <div>
        <div class="max-w-[950px] mx-auto h-screen flex items-center justify-center gap-16">
            <div class="image w-[50%] relative">
                <img class=" rounded-xl h-[350px] w-[90%]"
                    src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="">
                <div class="work absolute bottom-[-28px] right-0 p-16 rounded-full bg-white">
                    <img class=" w-12"
                        src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png" alt="">
                </div>
            </div>
            <div class="details w-[50%]">
                <h1 class="text-sky-600 font-bold text-lg">ABOUT ME</h1>
                <h1 class=" font-bold text-2xl mt-2">A dedicated Front-end Developer
                    based in Belgrade, Serbia 📍</h1>
                <p class=" font-normal text-[17px] opacity-80 mt-4">As a Junior Front-End Developer, I possess an impressive
                    arsenal of skills in HTML, CSS, JavaScript,
                    React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth
                    user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and
                    optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who
                    thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
}
</script>