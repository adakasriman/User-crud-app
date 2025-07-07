<script setup>
import { ref, onMounted } from 'vue';
import { userList } from '../../stores/auth';
import { updatePassword, deleteUser } from '../../stores/auth';
import UpdatePasswordForm from '../UpdatePasswordForm.vue';

const users = ref([]);
const user = ref({});
const showPasswordDialog = ref(false);
const fetchUsers = async () => {
    try {
        const response = await userList();
        users.value = response.users;
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    fetchUsers();
});
const deleteUserById = async (id) => {
    try {
        await deleteUser(id);
        fetchUsers();
    } catch (error) {
        console.error(error);
    }
};


const editPassword = (selectedUser) => {
    user.value = selectedUser;
    showPasswordDialog.value = true;
};
const updateUserPassword = async (passwordDetails) => {
    const { oldPassword, newPassword } = passwordDetails;
    try {
        console.log('Login:', user.value.gmail, newPassword);
        const userData = await updatePassword({ gmail: user.value.gmail, oldPassword: oldPassword, newPassword: newPassword });
        console.log('User logged in:', userData);
        fetchUsers();
        onCancel();
    } catch (err) {
        console.error('Login failed', err);
    }
};

</script>

<template>
    <v-container>
        <h1>User List</h1>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Password</th>
                    <th class="text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.gmail }}</td>
                    <td>{{ user.password }}</td>
                    <td class="d-flex">
                        <v-btn color="error" variant="outlined" @click="deleteUserById(user.id)">Delete</v-btn>
                        <v-btn color="error" variant="outlined" @click="editPassword(user)">update Password</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <UpdatePasswordForm v-model="showPasswordDialog" @submit="updateUserPassword" />
    </v-container>
</template>

<style></style>