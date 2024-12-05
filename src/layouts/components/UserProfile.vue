<script setup>
import { initialAbility } from '@/plugins/casl/ability'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import { useRouter } from 'vue-router'

const router = useRouter()
const ability = useAppAbility()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')


// Logout function
const logout = () => {
  // Clear user-related data from localStorage
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userAbilities')

  // Reset abilities to initial state
  ability.update(initialAbility)

  // Redirect to login page
  router.push('/login')
}

// Register function
const register = () => {
  // Clear user-related data from localStorage
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userAbilities')

  // Reset abilities to initial state
  ability.update(initialAbility)

  // Redirect to register page
  router.push('/register')
}

// Function to simulate profile access check
const checkProfileAccess = () => {
  if (!localStorage.getItem('accessToken')) {
    router.push('/login')
  } else {
    console.log('Accessing profile page...')
  }
}
</script>

<template>
  <!-- Login Button -->
  <div
    class="p-2 mt-1 rounded-lg shadow-md transition duration-300 cursor-pointer"
    @click="register"
  >
    Register
  </div>
</template>

