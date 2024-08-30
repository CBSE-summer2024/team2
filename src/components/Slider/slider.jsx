import React, { useEffect } from 'react';
import { createApp } from 'vue';
import Slider from './Slider.vue';

const SliderIntgration = () => {
  useEffect(() => {
    const vueApp = createApp(Slider);
    vueApp.mount('#vue-root'); 
    return () => {
      vueApp.unmount(); 
    };
  }, []);

  return (
    <div>
      <vueApp></vueApp>
    </div>
  );
};

export default SliderIntgration;
