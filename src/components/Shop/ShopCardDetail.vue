<template>
  <div class="shop-detail-container">
    <h1 class="header">Product Details</h1>
    <div class="product-details">

      <div class="product-image">
        <div class="main-image">
          <img :src="product.image" alt="Product Image" />
        </div>
        <div class="thumbnail-container">
          <button @click="goToPreviousThumbnail">
            <svg-icon class="thumbnail" type="mdi" :path="pathlesser"></svg-icon>
          </button>
          <img
            v-for="(thumb, index) in product.thumbnails"
            :key="index"
            :src="thumb"
            alt="Thumbnail"
            class="thumbnail"
            @click="setImage(thumb)"
          />
          <button @click="goToNextThumbnail">
            <svg-icon class="thumbnail" type="mdi" :path="pathgreater"></svg-icon>
          </button>
        </div>
      </div>

      <div class="product-info">
        <h1 class="title">
          <strong>{{ product.name }}</strong>
        </h1>
        <div class="ratings">
          <span>⭐⭐⭐⭐</span>
          <span>{{ product.reviews }} Reviews</span>
        </div>
        <p>
          <strong>Brand:</strong> {{ product.brand }}
        </p>
        <p class="price">
          <span>${{ product.discountedPrice }}</span>
        </p>
        <div>
          <span class="original-price">${{ product.originalPrice }}</span>
          <span class="discount">{{ product.discount }}% Off</span>
        </div>
        <p class="description">{{ product.description }}</p>
        <div class="stock-shipping">
          <p>
            <strong>Available:</strong>
            <span class="in-stock">In Stock</span>
          </p>
          <p>
            <strong>Shipping:</strong> Free
          </p>
        </div>
        <div class="quantity">
          <label><strong>Quantity:</strong></label>
          <div class="col-span-2 flex items-center gap-2">
            <button
              @click="decreaseQuantity(product)"
              class="quantity-button"
            >
              -
            </button>
            <span>{{ product.quantity }}</span>
            <button
              @click="increaseQuantity(product)"
              class="quantity-button"
            >
              +
            </button>
          </div>
          <span>{{ product.stock }} pieces available</span>
        </div>
        <div class="actions">
          <Loading v-if="isLoading" />
          <button class="btn buy-now" id="buynow">Buy Now</button>
          <button class="btn add-to-cart" @click="addToCart()">
            <RouterLink :to="`/shop/list`">Add to Cart</RouterLink>
          </button>
        </div>
        <div class="meta">
          <p>
            <strong>Category:</strong> {{ product.category }}
          </p>
          <p>
            <strong>Tags:</strong> {{ product.tags.join(", ") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import book from '../../assets/shop/book.png'
import higglightor from '../../assets/shop/higglightor.png'
import caculator from '../../assets/shop/caculator.png'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiGreaterThan, mdiTagHidden } from '@mdi/js';
import { mdiLessThan } from '@mdi/js';

export default {
  name: 'ShopCardDetail',
  components: {
    SvgIcon
  },
  methods: {
    decreaseQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    increaseQuantity(product) {
      if (product.quantity < product.stock) {
        product.quantity++;
      }
    },
    setImage(thumb) {
    this.product.image = thumb; 
    },
    goToPreviousThumbnail() {
      // Logic for navigating to previous thumbnail
      const currentIndex = this.product.thumbnails.indexOf(this.product.image); 
      if (currentIndex === -1) return;
      this.product.image = this.product.thumbnails[(currentIndex - 1 + this.product.thumbnails.length) % this.product.thumbnails.length];
    },
    goToNextThumbnail() {
      // Logic for navigating to next thumbnail
      const currentIndex = this.product.thumbnails.indexOf(this.product.image);
      if (currentIndex === -1) return; 
      this.product.image = this.product.thumbnails[(currentIndex + 1) % this.product.thumbnails.length];
    },
    
  },
  data() {
    return {
      isLoading : false,
      pathlesser: mdiLessThan,
      pathgreater: mdiGreaterThan,
      product: {
        name: "Leo Sodales Varius",
        brand: "Chair",
        image: book,
        thumbnails: [book, caculator, caculator, higglightor],
        discountedPrice: 220,
        originalPrice: 180,
        discount: 30,
        quantity: 1,  
        description:
          "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
        reviews: 778,
        stock: 100, 
        category: "Furniture",
        tags: ["Blue", "Green", "Light"],
      },
    };
  },
};
</script>
<style scoped>
.shop-detail-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.product-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.product-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #f8f8f8;
}

.main-image {
  background: #f8f8f8;
  height: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.main-image img {
  width: 50%;
  height: auto;
  object-fit: contain;
  display: flex;
  justify-content: center;
}

.thumbnail-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.thumbnail {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbnail:hover {
  border-color: #a4a5ac;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 2rem;
  color: #1f2937;
}

.ratings {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #6b7280;
}

.price {
  font-size: 2rem;
  color: #1f2937;
  font-weight: 600;
  margin: 0;
}

.original-price {
  text-decoration: line-through;
  color: #6b7280;
  margin-right: 1rem;
}

.discount {
  color: #10b981;
  background: #d1fae5;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.description {
  color: #6b7280;
  line-height: 1.6;
}

.stock-shipping {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.in-stock {
  color: #10b981;
  margin-left: 0.5rem;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quantity-button {
  width: 32px;
  height: 32px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
}

.quantity-button:hover {
  background: #f3f4f6;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.buy-now {
  background: #7c3aed;
  color: white;
  border: none;
}

.buy-now:hover {
  background: #6d28d9;
}

.add-to-cart {
  background: #4f46e5;
  color: white;
  border: none;
}

.add-to-cart:hover {
  background: #4338ca;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #6b7280;
}

/* Responsive Design */
@media (max-width: 768px) {
  .product-details {
    grid-template-columns: 1fr;
  }
  
  .actions {
    flex-direction: column;
  }
}
</style>