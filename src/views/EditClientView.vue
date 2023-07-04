<script setup>
import { onMounted, reactive } from 'vue';
import ClientService from '../services/ClientService'
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue'
import { FormKit } from '@formkit/vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

//console.log(route.params)
const { id } = route.params

const formData = reactive({})


onMounted(() => {
    ClientService.getClient(id)
        .then(({ data }) => {
            //console.log(data)
            Object.assign(formData,data)
        })
        .catch( error => console.error())
})

defineProps({
    title: {
        type: String,
        required: true
    }
})

const handleSubmit = (data) => {
    ClientService.editClient(id, data)
        .then(() => router.push({ name: 'home' }))
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
                    v-model="formData.name"
                />
                <FormKit
                    type="text"
                    label="Surname"
                    name="surname"
                    placeholder="surname"
                    validation="required"
                    :validation-messages="{required: 'Surname is required.'}"
                    v-model="formData.surname"
                />
                <FormKit
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email"
                    validation="required|email"
                    :validation-messages="{required: 'Email is required.'}"
                    v-model="formData.email"
                />
                <FormKit
                    type="text"
                    label="Phone"
                    name="phone"
                    placeholder="Phone: xxx-xxx-xxxx"
                    validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{matches: 'Phone number format is incorrect.'}"
                    v-model="formData.phone"
                />
                <FormKit
                    type="text"
                    label="Company"
                    name="company"
                    placeholder="company"
                    v-model="formData.company"
                />
                <FormKit
                    type="text"
                    label="Occupation"
                    name="occupation"
                    placeholder="Occupation"
                    v-model="formData.occupation"
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
