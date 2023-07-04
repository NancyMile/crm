<script setup>
    import { onMounted, ref, computed } from 'vue';
    import axios from'axios'
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue'

    const clients = ref([])

    onMounted(() => {
        axios.get('http://localhost:4000/clients')
            .then(({ data }) => {
                //console.log(data)
                clients.value = data
            })
            .catch(error => console.log("Error"))
    })

    defineProps({
        title: {
            type: String,
            required: true
        }
    })

    const hasClients = computed(() => {
        return Object.values(clients.value).length > 0
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
        <div v-if="hasClients" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Name</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Company</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Status</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Accitions</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <p class="text-center mt-10" v-else>No clients at the moment.</p>
    </div>
</template>
