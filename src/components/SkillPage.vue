<template>
    <div>
        <div class="skills flex items-center gap-10 mt-20">
            <h1 class=" text-xl opacity-90 font-semibold">Tech Stack</h1>
            <h1 class=" text-xl opacity-90">|</h1>
            <div class="flex gap-2 cursor-pointer hover:translate-y-[-5px] duration-200 ease-in">
                <i class="fa-brands fa-html5 text-5xl text-orange-600"></i>
                <i class="fa-brands fa-css3-alt text-5xl text-sky-600"></i>
            </div>
            <div class="flex gap-2 cursor-pointer hover:translate-y-[-5px] duration-200 ease-in">
                <i class="fa-brands fa-square-js text-5xl text-yellow-400"></i>
                <i class="fa-brands fa-php text-5xl text-purple-600"></i>
            </div>
            <div class="flex gap-2 cursor-pointer hover:translate-y-[-5px] duration-200 ease-in">
                <i class="fa-brands fa-vuejs text-5xl text-green-500"></i>
                <i class="fa-brands fa-laravel text-5xl text-red-500"></i>
            </div>
            <div class="flex gap-2 items-center cursor-pointer hover:translate-y-[-5px] duration-200 ease-in">
                <img class=" w-16" src="https://www.pngrepo.com/download/354431/tailwindcss-icon.png" alt="">
                <i class="fa-brands fa-bootstrap text-5xl text-violet-700"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillPage'
}
</script>

