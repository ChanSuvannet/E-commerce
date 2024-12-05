<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <footer class="footer">
      <div class="row">
        <!-- Learn More Section -->
        <div class="col">
          <h4 class="section-title">Learn More</h4>
          <ul class="footer-list">
            <li><a href="/new-product" class="footer-link">New Product</a></li>
            <li><a href="/service" class="footer-link">Service</a></li>
            <li><a href="/discount" class="footer-link">Discount</a></li>
            <li><a href="/payment" class="footer-link">Payment</a></li>
            <li><a href="/privacy-policy" class="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
        <!-- Service Section -->
        <div class="col">
          <h4 class="section-title">Service</h4>
          <ul class="footer-list">
            <li><a href="/pen" class="footer-link">Pen</a></li>
            <li><a href="/book" class="footer-link">Book</a></li>
            <li><a href="/office-material" class="footer-link">Office Material</a></li>
            <li><a href="/more" class="footer-link">More...</a></li>
          </ul>
        </div>
        <!-- Contact Us Section -->
        <div class="col">
          <h4 class="section-title">Contact Us</h4>
          <p>Phone: +123456789</p>
          <p>Email: example@domain.com</p>
          <p>Address: 123 Street Name, City</p>
        </div>
        <!-- Social Section -->
        <div class="col">
          <h4 class="section-title">Social</h4>
          <div class="social-icons">
            <!-- Facebook Icon -->
            <a href="https://www.facebook.com" target="_blank">
              <i class="fab fa-facebook social-icon"></i>
            </a>
            <!-- Instagram Icon -->
            <a href="https://www.instagram.com" target="_blank">
              <i class="fab fa-instagram social-icon"></i>
            </a>
            <!-- Twitter Icon -->
            <a href="https://twitter.com" target="_blank">
              <i class="fab fa-twitter social-icon"></i>
            </a>
            <!-- LinkedIn Icon -->
            <a href="https://www.linkedin.com" target="_blank">
              <i class="fab fa-linkedin social-icon"></i>
            </a>
            <!-- YouTube Icon -->
            <a href="https://www.youtube.com" target="_blank">
              <i class="fab fa-youtube social-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
body {
  color: aliceblue;
  margin: 0;
}

.footer {
  background-color: #051752;
  color: white !important;
  padding: 20px 0;
  width: 100%;
  position: relative;
  bottom: 0;
  margin: 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  padding: 0 20px;
  color: white;
}

.col {
  flex-basis: 20%;
  margin-bottom: 20px;
  padding-right: 20px;
}

.section-title {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.footer-link:hover {
  text-decoration: underline;
  color: #ff9800;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  font-size: 24px;
  color: white;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ff9800;
}

p {
  color: white !important;
  font-size: 14px;
  margin: 10px 0;
}

.footer p,
.footer h4 {
  color: white !important;
  margin: 10px 0;
}
</style>
