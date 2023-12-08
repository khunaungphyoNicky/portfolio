<template>
    <div>
        <div class="max-w-[950px] mx-auto my-16">
            <h1 class=" uppercase font-bold text-lg text-blue-600">portfolio</h1>
            <h1 class=" font-bold text-2xl mt-2">Each project is a unique piece of development 🧩</h1>

            <div class="box mt-10 flex justify-center items-center gap- p-4 shadow-xl shadow-gray-200 rounded-xl bg-white">
                <div class="image w-[60%]">
                    <img class=" rounded-xl" src="https://th.bing.com/th/id/OIP.JLXCewrMHK5v43dcWsBDWAHaEX?rs=1&pid=ImgDetMain" alt="">
                </div>
                <div class="info w-[40%] text-center">
                    <h1 class=" font-bold text-[17px]">CAR RENTAL <span class=" font-semibold text-base">(FEBRUARY 2023)</span> 🚗</h1>
                    <p class=" font-normal text-[17px] opacity-80 mt-4">A car rental website is an online platform that allows users to rent cars for personal or business
                        use. The website provides an interface for searching, comparing, and reserving cars.</p>
                    <div class="language flex justify-center gap-3 my-5">
                        <div class=" py-3 px-4 bg-white font-bold rounded-md shadow-md shadow-slate-200">Laravel</div>
                        <div class=" py-3 px-4 bg-white font-bold rounded-md shadow-md shadow-slate-200">Vue JS</div>
                    </div>
                    <div class="demo flex justify-center gap-12 mt-3">
                        <div class="flex items-center gap-1 hover:text-sky-500 duration-200 ease-in-out opacity-80"> 
                            <h1 class=" font-semibold text-[17px]">Code</h1> 
                            <i class="fa-brands fa-github text-2xl"></i>
                        </div>
                        <div class="flex items-center gap-1 hover:text-sky-500 duration-200 ease-in-out opacity-80"> 
                            <h1 class=" font-semibold text-[17px]">Live Demo</h1> 
                            <i class="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectPage'
}
</script>