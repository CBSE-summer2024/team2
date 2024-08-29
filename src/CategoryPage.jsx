import React, { useEffect } from 'react';
import { createApp } from 'vue';
import listofcategory from './components/Categorylist/listofcategory.vue';

const CategoryPage = () => {
  useEffect(() => {
    const vueApp = createApp(listofcategory);
    vueApp.mount('#vue-root'); 
    return () => {
      vueApp.unmount(); 
    };
  }, []);

  return (
    <div>
      <div id="vue-root"></div> 
    </div>
  );
};

export default CategoryPage;
