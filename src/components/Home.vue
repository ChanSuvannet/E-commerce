<template>
  <div>
    <!-- Header -->
    <header>
      <div class="logo">
        EduMaterialShop
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Event</a>
        <a href="#">FAQs</a>
      </nav>
      <div>
        <button>Sign Up</button>
      </div>
    </header>
    
    <!-- Banner -->
    <div class="banner">
      <h1>Best products for your Education</h1>
      <p>Get 50% off every product</p>
      <button>More</button>
    </div>
    
    <!-- Best Sellers Section -->
    <div class="best-sellers">
      <h2>Best Sellers</h2>
      <div class="product-grid">
        <div class="product">
          <img
            src="sharpener.jpg"
            alt="Sharpener"
          >
          <h3>Sharpener</h3>
          <p>$2.00 <del>$4.00</del></p>
          <button>Buy Now</button>
          <button>Add to cart</button>
        </div>
        <div class="product">
          <img
            src="black-notebook.jpg"
            alt="Black Notebook"
          >
          <h3>Black Notebook</h3>
          <p>$5.00 <del>$10.00</del></p>
          <button>Buy Now</button>
          <button>Add to cart</button>
        </div>
        <!-- Add more products as needed -->
      </div>
    </div>
    
    <!-- Footer -->
    <footer>
      <div>More Information</div>
      <div>Services</div>
      <div>Contact</div>
      <div>Social Media Icons</div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* General Styles */
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Header Styles */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding-block: 10px;
  padding-inline: 20px;
}

header nav a {
  color: #333;
  margin-block: 0;
  margin-inline: 10px;
  text-decoration: none;
}

/* Banner Styles */
.banner {
  background-color: #e0e0e0;
  padding-block: 50px;
  padding-inline: 20px;
  text-align: center;
}

.banner h1 {
  margin: 0;
  font-size: 2em;
}

.banner p {
  font-size: 1.2em;
}

.banner button {
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1em;
  padding-block: 10px;
  padding-inline: 20px;
}

/* Best Sellers Section Styles */
.best-sellers {
  padding: 20px;
  text-align: center;
}

.best-sellers h2 {
  margin-block-end: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  padding: 10px;
  border: 1px solid #ddd;
  margin: 10px;
  inline-size: 200px;
  text-align: center;
}

.product img {
  block-size: auto;
  max-inline-size: 100%;
}

.product h3 {
  font-size: 1.2em;
  margin-block: 10px;
  margin-inline: 0;
}

.product p {
  margin-block: 5px;
  margin-inline: 0;
}

.product button {
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 0.9em;
  padding-block: 5px;
  padding-inline: 10px;
}

/* Footer Styles */
footer {
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
}

footer a {
  color: white;
  margin-block: 0;
  margin-inline: 10px;
  text-decoration: none;
}
</style>
