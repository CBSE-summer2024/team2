<template>
  <div class="slider-container">
    <button class="nav-button prev" @click="prevSlide">&#10094;</button>
    <div class="slider" ref="slider">
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img :src="image" alt="Slide Image" />
      </div>
    </div>
    <button class="nav-button next" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script>
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

export default {
  name: "Slider",
  data() {
    return {
      images: [img1, img2, img3],
      currentIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.updateSliderPosition();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateSliderPosition();
    },
    updateSliderPosition() {
      const slider = this.$refs.slider;
      const slideWidth = slider.querySelector(".slide").offsetWidth;
      slider.style.transform = `translateX(-${
        this.currentIndex * slideWidth
      }px)`;
    },
  },
  mounted() {
    this.updateSliderPosition();
    window.addEventListener("resize", this.updateSliderPosition);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSliderPosition);
  },
};
</script>

<style scoped>
.slider-container {
  border-radius: 10px solid black;
  position: relative;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  overflow: hidden;
  margin-bottom: 30px;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%; /* Adjust to make each slide fit the container width */
  box-sizing: border-box;
}

img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px; /* Optional: for rounded corners */
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
