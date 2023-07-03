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
                    validation="required"
                    :validation-messages="{required: 'Name is required.'}"
                />
                <FormKit
                    type="text"
                    label="Surname"
                    placeholder="surname"
                    validation="required"
                    :validation-messages="{required: 'Surname is required.'}"
                />
                <FormKit
                    type="email"
                    label="Email"
                    placeholder="Email"
                    validation="required|email"
                    :validation-messages="{required: 'Email is required.'}"
                />
                <FormKit
                    type="text"
                    label="Phone"
                    placeholder="Phone: xxx-xxx-xxxx"
                    validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{matches: 'Phone number format is incorrect.'}"
                />
                <FormKit
                    type="text"
                    label="Company"
                    placeholder="company"
                />
                <FormKit
                    type="text"
                    label="Occupation"
                    placeholder="Occupation"
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
