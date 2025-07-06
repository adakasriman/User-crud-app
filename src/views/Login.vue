<script setup lang="ts">
import { ref } from 'vue';
import { login } from '../stores/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    console.log('Login:', email.value, password.value);
    const userData = await login({ gmail: email.value, password: password.value });
    console.log('User logged in:', userData);
    router.push('/dashboard');
  } catch (err) {
    console.error('Login failed', err);

  }
};
</script>
<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
        <v-card class="pa-6" max-width="400">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="handleLogin">
                    <div class="d-flex flex-column gap-2">
                        <v-text-field v-model="email" label="Email" type="email" required />
                        <v-text-field v-model="password" label="Password" type="password" required />
                    </div>
                    <v-btn class="mt-4" color="primary" type="submit" block>Login</v-btn>
                </v-form>
                <div class="mt-4 text-center">
                    <router-link to="/signup">Don't have an account? Sign up</router-link>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>