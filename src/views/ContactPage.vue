<template>
    <div class="h-[50vh] flex items-center bg-white">
        <div class="max-w-[950px] mx-auto w-full">
            <div class="contact">
                <h1 class="text-blue-600 font-bold text-lg uppercase">contact</h1>
                <h1 class=" font-bold text-2xl mt-2 opacity-80">Don't be shy! Hit me up! 👇</h1>
                <div class="info my-10 flex gap-10">
                    <div class="location flex gap-6 items-center">
                        <div class="p-5 rounded-full border border-gray-200"><i class="fa-solid fa-map-location-dot text-blue-600 text-3xl opacity-80"></i></div>
                        <div class="address">
                            <h1 class="font-bold text-lg opacity-80">Location</h1>
                            <p>Taunggyi, Myanmar</p>
                        </div>
                    </div>
                    <div class="location flex gap-6 items-center ">
                        <div class="p-5 rounded-full border border-gray-200"><i class="fa-solid fa-envelope text-blue-600 text-3xl opacity-80"></i></div>
                        <div class="address">
                            <h1 class="font-bold text-lg opacity-80">Mail</h1>
                            <p>khunaungphyo8800@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactPage'
    }
</script>

