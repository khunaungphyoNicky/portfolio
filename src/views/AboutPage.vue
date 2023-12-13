<template>
    <div class="py-[150px] flex items-center justify-center bg-white about-page">
        <div class="max-w-[950px] flex gap-14 about w-full">
            <div class="about-image w-[410px] h-[363px] relative">
                <img class=" rounded-xl w-full h-full"
                    src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="">
                <div class=" work absolute bottom-[-25px] right-[-25px] p-16 rounded-full bg-white border border-gray-200">
                    <img class=" w-12"
                        src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png" alt="">
                </div>
            </div>
            <div class="about-details w-[490px] min-h-[356px]">
                <h1 class=" text-[#147EFB] font-bold text-lg">ABOUT ME</h1>
                <h1 class=" font-bold text-[27px] mt-2 opacity-80">A dedicated Front-end Developer
                    based in Belgrade, Serbia 📍</h1>
                <p class=" font-normal text-[17px] opacity-80 mt-4 about-content">As a Junior Front-End Developer, I possess an impressive
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