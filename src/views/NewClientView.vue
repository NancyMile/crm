<script setup>
import axios from '../lib/axios.js';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue'
import { FormKit } from '@formkit/vue'
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps({
    title: {
        type: String,
        required: true
    }
})

const handleSubmit = (data) => {
    //console.log('submit ...')
    //console.log(data)
    axios.post('/clients', data)
        .then(response => {
            //console.log(response)
            //redirects
            router.push({name: 'home'})
        })
        .catch(error => console.log(error))
}
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
                submit-label="Add Client"
                incomplete-message=" Please try again"
                @submit="handleSubmit"
            >
                <FormKit
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Client name"
                    validation="required"
                    :validation-messages="{required: 'Name is required.'}"
                />
                <FormKit
                    type="text"
                    label="Surname"
                    name="surname"
                    placeholder="surname"
                    validation="required"
                    :validation-messages="{required: 'Surname is required.'}"
                />
                <FormKit
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email"
                    validation="required|email"
                    :validation-messages="{required: 'Email is required.'}"
                />
                <FormKit
                    type="text"
                    label="Phone"
                    name="phone"
                    placeholder="Phone: xxx-xxx-xxxx"
                    validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{matches: 'Phone number format is incorrect.'}"
                />
                <FormKit
                    type="text"
                    label="Company"
                    name="company"
                    placeholder="company"
                />
                <FormKit
                    type="text"
                    label="Occupation"
                    name="occupation"
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
