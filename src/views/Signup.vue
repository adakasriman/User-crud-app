<!-- src/views/Signup.vue -->
<script setup>
import { ref } from 'vue';
import { signup } from '../stores/auth';
import { useRouter } from 'vue-router';
const userName = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const handleSignup = () => {
  console.log('Signup:', userName.value, email.value, password.value);
  // Add your signup logic here
  signup({ userName: userName.value, gmail: email.value, password: password.value }).then((response) => {
    router.push('/login');
  }).catch((error) => {
    console.error(error);
  });
};
</script>
<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
        <v-card class="pa-6" max-width="400">
            <v-card-title>Sign Up</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="handleSignup">
                    <v-text-field v-model="userName" label="Name" required />
                    <v-text-field v-model="email" label="Email" type="email" required />
                    <v-text-field v-model="password" label="Password" type="password" required />
                    <v-btn class="mt-4" color="primary" type="submit" block>Sign Up</v-btn>
                </v-form>
                <div class="mt-4 text-center">
                    <router-link to="/login">Already have an account? Login</router-link>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>