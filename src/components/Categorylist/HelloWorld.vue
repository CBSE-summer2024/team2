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

<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      fetch('/data/ecommerce_schema.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.categories = data.categories;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Add some styling if needed */
</style>
