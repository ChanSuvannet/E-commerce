<template>
    <div v-if="message" class="notification">
      {{ message }}
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
import { useCartstore} from '../../stores/counter'
  export default {
    name: 'CartNotification',
    props: {
      message:{
        type: String,
        required: true, 
      }
    }
  };
  </script>
  
  <style>
  .notification {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border-radius: 5px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  </style>
  