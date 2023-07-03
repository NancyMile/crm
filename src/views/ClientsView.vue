<script setup>
    import { onMounted } from 'vue';
    import axios from'axios'
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue'

    onMounted(() => {
        axios.get('http://localhost:4000/clients')
            .then(({ data }) => {
                console.log(data)
            })
            .catch(error => console.log("Error"))
    })

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
