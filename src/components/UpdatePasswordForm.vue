<script setup lang="ts">
import { ref, computed } from 'vue';
// Props
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'submit', payload: { oldPassword: string; newPassword: string }): void;
}>();


// Local ref tied to prop for dialog binding
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val),
});

const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const error = ref('');
const formRef = ref();

const required = (v: string) => !!v || 'Required';
const matchPassword = (v: string) => v === newPassword.value || 'Passwords do not match';

const onSubmit = async () => {
  error.value = '';
  if (!(formRef.value as any)?.validate()) {
    error.value = 'Fix validation errors';
    return;
  }
  emit('submit', { oldPassword: oldPassword.value, newPassword: newPassword.value });

  onCancel()
};

const onCancel = () => {
  dialogVisible.value = false;
  oldPassword.value = '';
  newPassword.value = '';
  confirmPassword.value = '';
  error.value = '';
};
</script>

<template>
  <v-dialog v-model="dialogVisible" max-width="500">
    <v-card>
      <v-card-title class="text-h6">Update Password</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="onSubmit" ref="formRef">
          <v-text-field v-model="oldPassword" label="Old Password" type="password" :rules="[required]" />
          <v-text-field v-model="newPassword" label="New Password" type="password" :rules="[required]" />
          <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" :rules="[required, matchPassword]" />
          <v-alert v-if="error" type="error" class="mt-3" dense>{{ error }}</v-alert>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="onCancel">Cancel</v-btn>
        <v-btn color="primary" @click="onSubmit">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
