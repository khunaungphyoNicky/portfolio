<template>
    <div>
        <div class="max-w-[950px] mx-auto my-32">
            <div class="box-title">
                <h1 class=" uppercase font-bold text-lg text-blue-600">portfolio</h1>
                <h1 class=" font-bold text-[27px] opacity-80 mt-2">Each project is a unique piece of development 🧩</h1>
            </div>
            <div class="box-parent">
                <BoxPage />
            </div>
        </div>
    </div>
</template>

<script>
import BoxPage from '@/components/BoxPage.vue'
export default {
    name: 'ProjectPage',
    components: {
        BoxPage,
    },
}
</script>