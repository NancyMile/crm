<script setup>
   import RouterLink from '../components/UI/RouterLink.vue';
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="new-client">
                New Client!
            </RouterLink>
        </div>
        <h1 class="text-4xl font-extrabold text-slate-500">Clients</h1>
    </div>
</template>
