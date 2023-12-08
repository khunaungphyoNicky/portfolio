<template>
    <div>
        <div class="max-w-[950px] mx-auto mt-16 my-32">
            <h1 class=" uppercase font-bold text-lg text-blue-600">portfolio</h1>
            <h1 class=" font-bold text-2xl mt-2">Each project is a unique piece of development 🧩</h1>
            <BoxPage/>
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