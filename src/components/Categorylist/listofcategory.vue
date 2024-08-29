<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// تعريف متغير categories كمصفوفة فارغة
const categories = ref([]);

// دالة لجلب الفئات من API
const fetchCategories = async () => {
  try {
    const response = await fetch('../../api/ecommerce_schema.json'); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    categories.value = data.categories; // تحديث القيمة
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

// جلب الفئات عند تحميل المكون
onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
/* أضف بعض التنسيقات إذا لزم الأمر */
</style>
