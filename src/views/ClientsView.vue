<script setup>
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue'
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="new-client">
                New Client!
            </RouterLink>
        </div>
        <Heading>Clients</Heading>
    </div>
</template>
