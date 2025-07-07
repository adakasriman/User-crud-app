<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UserList from '../components/user/UserList.vue';
import { logout } from '../stores/auth';
const router = useRouter();
const handleLogout = () => {
  logout();
  router.push('/login');
};
</script>

<template>
  <v-container>
    <h1>Dashboard</h1>
    <v-btn @click="handleLogout" color="error" variant="outlined">Logout</v-btn>
    <UserList />

  </v-container>
</template>

<style>

</style>