<template>
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
          <li>
            <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <!-- Service Section -->
      <div class="col">
        <h4 class="section-title">Service</h4>
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
</template>

<style scoped>
body {
  color: aliceblue;
  margin: 0; /* Remove default body margin */
}

.footer {
  background-color: #051752; /* Dark blue background */
  color: white !important; /* Ensure text color is white */
  padding: 20px 0;
  width: 100%; /* Full width of the page */
  position: relative;
  bottom: 0;
  margin: 0; /* Ensure no margin on the footer */
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%; /* Full width of the row */
  margin: 0; /* Remove row margin */
  padding: 0 20px; /* Add padding to prevent text from touching edges */
  color: white; /* Ensure row text is white */
}

.col {
  flex-basis: 20%; /* Adjust column width */
  margin-bottom: 20px;
  padding-right: 20px; /* Add padding to columns for spacing */
}

.section-title {
  color: white; /* Ensure section titles are white */
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-list {
  list-style: none; /* Removes bullet points */
  padding: 0; /* Removes default padding */
  margin: 0; /* Removes default margin */
  display: flex;
  flex-direction: column; /* Align links vertically */
  gap: 8px; /* Add spacing between links */
}

.footer-link {
  color: white; /* Set link text color to white */
  text-decoration: none; /* Removes underline from links */
  font-size: 16px; /* Adjust font size */
}

.footer-link:hover {
  text-decoration: underline; /* Adds underline on hover */
  color: #ff9800; /* Optional: Change to an accent color on hover */
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  font-size: 24px;
  color: white; /* Ensure social icons are white */
  transition: color 0.3s ease; /* Smooth transition effect */
}

.social-icon:hover {
  color: #ff9800; /* Change color on hover */
}

p {
  color: white !important; /* Ensure all paragraph text is white */
  font-size: 14px; /* Adjust font size */
  margin: 10px 0; /* Add spacing between paragraphs */
}

/* Make sure the p and h4 elements inside the footer use white color */
.footer p, .footer h4 {
  color: white !important;
  margin: 10px 0; /* Add margin for spacing */
}
</style>
