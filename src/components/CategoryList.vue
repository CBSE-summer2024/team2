<!-- src/components/CategoryList.vue -->
<template>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </template>
  
  <script setup>
  const categories = ['Technology', 'Health', 'Science', 'Education'];
  </script>
  