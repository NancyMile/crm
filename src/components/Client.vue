<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        client: {
            type: Object,
            required: true
        }
    })

    const fullName = computed(() => { 
        return props.client.name+' ' +props.client.surname         
    })

</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ fullName }} </p>
            <p class="text-gray-500">{{ client.email}}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ client.company }}</p>
            <p class="text-gray-600">{{ client.occupation }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
         
        </td>
    </tr>
</template>