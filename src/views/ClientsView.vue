<script setup>
    import { onMounted, ref, computed } from 'vue';
    import ClientService from '../services/ClientService'
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue'
    import Client from '../components/Client.vue'

    const clients = ref([])

    onMounted(() => {
        ClientService.getClients()
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

    const updateClientState = ({ id, state}) => {
        //console.log('update state',data)
        ClientService.changeClientState(id, { state: !state }) // chage state
        .then(() => {
            // change the state on clients array,to see the changes without reloading the page
            const i = clients.value.findIndex(client => client.id === id)
            clients.value[i].state = !state
        })
        .catch(error =>console.log(error))
    }

    const deleteClient = id => {
        //console.log('delete client ..',id)
        ClientService.deleteClient(id)
            .then(() => {
                clients.value = clients.value.filter(client => client.id !== id)
            })
            .catch( error => console.log(error))
    }

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
                            <Client
                                v-for="client in clients"
                                :key="client.id"
                                :client="client"
                                @update-state="updateClientState"
                                @delete-client="deleteClient"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <p class="text-center mt-10" v-else>No clients at the moment.</p>
    </div>
</template>
