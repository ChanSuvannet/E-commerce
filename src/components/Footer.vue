<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
  <br />
  <footer class="footer">
    <div class="footer-container">
      <!-- Learn More Section -->
      <div class="footer-column">
        <h4 class="footer-title">Learn More</h4>
        <ul class="footer-list">
          <li><a href="/new-product" class="footer-link">New Product</a></li>
          <li><a href="/service" class="footer-link">Service</a></li>
          <li><a href="/discount" class="footer-link">Discount</a></li>
          <li><a href="/payment" class="footer-link">Payment</a></li>
          <li>
            <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <!-- Service Section -->
      <div class="footer-column">
        <h4 class="footer-title">Service</h4>
        <ul class="footer-list">
          <li><a href="/pen" class="footer-link">Pen</a></li>
          <li><a href="/book" class="footer-link">Book</a></li>
          <li>
            <a href="/office-material" class="footer-link">Office Material</a>
          </li>
          <li><a href="/more" class="footer-link">More...</a></li>
        </ul>
      </div>

      <!-- Contact Us Section -->
      <div class="footer-column">
        <h4 class="footer-title">Contact Us</h4>
        <p class="footer-text">Phone: +123456789</p>
        <p class="footer-text">Email: example@domain.com</p>
        <p class="footer-text">Address: 123 Street Name, City</p>
      </div>

      <!-- Social Section -->
      <div class="footer-column">
        <h4 class="footer-title">Social</h4>
        <div class="footer-social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="footer-social-link"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            class="footer-social-link"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            class="footer-social-link"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            class="footer-social-link"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            class="footer-social-link"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #051752; /* Blue background */
  color: white;
  padding: 40px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  gap: 50px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

.footer-column {
  flex: 1 1 200px;
  margin: 10px;
}

.footer-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
}

.footer-link:hover {
  text-decoration: underline;
  color: #ff9800;
}

.footer-text {
  font-size: 14px;
  margin: 5px 0;
}

.footer-social-icons {
  display: flex;
  gap: 25px;
}

.footer-social-link {
  font-size: 24px;
  color: white;
  transition: color 0.3s ease;
}

.footer-social-link:hover {
  color: #ff9800;
}
</style>
