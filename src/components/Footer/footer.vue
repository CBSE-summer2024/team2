<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About Us</h4>
          <p>
            We are a team dedicated to building awesome web applications with the best tools and technologies.
          </p>
        </div>
        <div class="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 20px;
}

.footer-section h4 {
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
}

.footer-section p, .footer-section ul {
  margin: 0;
  line-height: 1.8;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #bbb;
  text-decoration: none;
}

.footer-section ul li a:hover {
  color: #fff;
}
</style>
