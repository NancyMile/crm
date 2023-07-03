<script setup>
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue'

    defineProps({
        title: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="new-client">
                New Client!
            </RouterLink>
        </div>
        <Heading>{{ title }}</Heading>
    </div>
</template>
