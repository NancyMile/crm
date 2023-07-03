<script setup>
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue'
import { FormKit } from '@formkit/vue'

defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex justify-end">
        <RouterLink to="home">
            Back
        </RouterLink>
    </div>
    <Heading>{{ title }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit
                type="form"
            >
                <FormKit
                    type="text"
                    label="Name"
                    placeholder="Client name"
                    help="Name of the new client"
                    validation="required"
                    :validation-messages="{required: 'Name is required.'}"
                />
            </FormKit>
        </div>
    </div>
</template>

<style>
.formkit-wrapper {
        max-width: 100%;
    }
</style>
