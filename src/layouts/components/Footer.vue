<template>
  <footer class="footer">
    <div class="row">
      <!-- Learn More Section -->
      <div class="col">
        <h3 class="section-title">Learn More</h3>
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
        <h3 class="section-title">Service</h3>
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
        <h3 class="section-title">Contact Us</h3>
        <p>Phone: +123456789</p>
        <p>Email: example@domain.com</p>
        <p>Address: 123 Street Name, City</p>
      </div>

      <!-- Social Section -->
      <div class="col">
        <h3 class="section-title">Social</h3>
        <div class="social-icons">
          <!-- Facebook Icon (link to Facebook) -->
          <a href="https://www.facebook.com" target="_blank">
            <i class="fab fa-facebook" style="color: white"></i>
          </a>

          <!-- Instagram Icon (link to Instagram) -->
          <a href="https://www.instagram.com" target="_blank">
            <i class="fab fa-instagram" style="color: white"></i>
          </a>

          <!-- Twitter Icon (link to Twitter) -->
          <a href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter" style="color: white"></i>
          </a>

          <!-- LinkedIn Icon (link to LinkedIn) -->
          <a href="https://www.linkedin.com" target="_blank">
            <i class="fab fa-linkedin" style="color: white"></i>
          </a>

          <!-- YouTube Icon (link to YouTube) -->
          <a href="https://www.youtube.com" target="_blank">
            <i class="fab fa-youtube" style="color: white"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
body {
  
  margin: 0; /* Remove default body margin */
}

.footer {
  background-color: #051752; /* Dark blue background */
  color: white; /* Ensure text color is white */
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
  color: white; /* Make sure row text is white */
}

.col {
  flex-basis: 20%; /* Adjust column width */
  margin-bottom: 20px;
  padding-right: 20px; /* Add padding to columns for spacing */
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white !important; /* Ensure section titles are white */
}

.social-icons {
  display: flex;
  gap: 10px;
}

p {
  margin: 10px 0; /* Increased margin for each paragraph */
  font-size: 14px;
  color: white !important; /* Ensure all paragraphs in footer are white */
}

/* Make sure the p and h4 elements inside the footer use white color */
.footer p,
footer h4 {
  color: white !important;
  margin: 10px 0; /* Added margin for spacing */
}
.social-icon {
  color: white; /* Set all icons to white */
  font-size: 36px; /* Optional: adjust the size of the icons */
}
.footer-list {
  list-style-type: none; /* Removes bullet points */
  padding: 0; /* Removes padding from the list */
  margin: 0; /* Removes margin */
}

.footer-link {
  display: block; /* Makes each link take up a full line */
  margin: 10px 0; /* Increases the space between links */
  font-size: 20px; /* Increases the font size */
  color: white;
  text-decoration: none;
  font-weight: bold; /* Makes the text bold */
  padding: 10px 0; /* Adds padding for better spacing */
}

.footer-link:hover {
  text-decoration: underline; /* Underline links on hover */
  color: #ffcc00; /* Changes the link color on hover */
}
</style>
