<template>
    <div class="shop-detail-container">
      <!-- Product Details Header -->
      <h1 class="header" >Product Details</h1>
      
      <!-- Main Content -->
      <div class="product-details">
        <!-- Left Section: Product Image -->
        <div class="product-image">
          <div class="main-image">
            <img :src="product.image" alt="Product Image"  />
          </div>

          <div class="thumbnail-container">
            <button ><svg-icon class="thumbnail" type="mdi" :path="pathlesser"></svg-icon>
            </button>
            <img
              v-for="(thumb, index) in product.thumbnails"
              :key="index"
              :src="thumb"
              alt="Thumbnail"
              class="thumbnail"
            />  
           <button><svg-icon class="thumbnail" type="mdi" :path="pathgreater"></svg-icon></button>
          </div>
        </div>
  
        <!-- Right Section: Product Info -->
        <div class="product-info">
          <h1 class="title"><strong>{{ product.name }}</strong></h1>
          <div class="ratings">
            <span>⭐⭐⭐⭐</span> 
            <span>{{ product.reviews }} Reviews</span>
          </div>
          <p><strong>Brand:</strong> {{ product.brand }}</p>
          <p class="price">
            <span>${{ product.discountedPrice }}</span>
          </p>
          <div>
                <span class="original-price">${{ product.originalPrice }}</span>
                <span class="discount">{{ product.discount }}% Off</span>
            </div>
          <p class="description">{{ product.description }}</p>
          <div class="stock-shipping">
            <p><strong>Available:</strong> <span class="in-stock">In Stock</span></p>
            <p><strong>Shipping:</strong> Free</p>
          </div>
          <div class="quantity">
            <label><strong>Quantity:</strong></label>
            <!-- <input type="number" min="1" max="540" v-model="quantity" /> -->
              <div class="col-span-2 flex items-center gap-2">
                <button @click="decreaseQuantity(product)" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100">
                  -
                </button>
                <span>{{ product.quantity }}</span>
                <button @click="increaseQuantity(product)" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100">
                  +
                </button>
              </div>
            <span>{{ product.stock }} pieces available</span>
          </div>
          <div class="actions">
            <button class="btn buy-now" id="buynow">Buy Now</button>
            <button class="btn add-to-cart"><RouterLink :to="`/shop/list`" >Add to Cart</RouterLink></button>
          </div>
          <div class="meta">
            <p><strong>Category:</strong> {{ product.category }}</p>
            <p><strong>Tags:</strong> {{ product.tags.join(", ") }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import book from '../../assets/shop/book.png'
  import caculator from '../../assets/shop/caculator.png'
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiGreaterThan } from '@mdi/js';
  import { mdiLessThan } from '@mdi/js';

  export default {
    name: 'ShopCardDetail',
    components: {
    SvgIcon
    },
    methods: {
      decreaseQuantity(product) {
        if(product.quantity > 1){
          product.quantity--
        }
      },
      increaseQuantity(product){
          product.quantity ++;
      }
    },
    data() {
      return {
        pathlesser: mdiLessThan,
        pathgreater: mdiGreaterThan,
        product: {
          name: "Leo Sodales Varius",
          brand: "chair",
          image: book,
          thumbnails: [
          book,
          caculator,
          caculator,
          ],
          discountedPrice: 220,
          originalPrice: 180,
          discount: 30,
          quantity: 100,
          description:
            "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
          reviews: 778,
          stock: 540,
          category: "Furniture",
          tags: ["Blue", "Green", "Light"],
        },
      };
    },
   
  };
  </script>
  
<style scoped>
.shop-detail-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
.product-details {
    display: flex;
    gap: 20px;
}
.header{
    font-size: 20px;
    font-weight: bold; 
    color: gray
}
  
.product-image {
    flex: 1;
    padding-left: 10px; 
    
}
.main-image {
  max-width: 100%; 
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
#buynow{
  border-radius: 4px;

}

.thumbnail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.thumbnail {
  width: 50px;
  height: auto;
  cursor: pointer; 
  background-color: rgb(199, 198, 198);
  padding: 10px;
  border-radius: 5px
}
.title{
    font-size: 30px;
    margin-bottom: 10px;
} 

  
  .product-info {
    flex: 2;
    padding: 20px;
  }
  
  .ratings span {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 10px;
  }
  
  .price {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin: 10px 0;
  }
  
  .original-price {
    text-decoration: line-through;
    color: gray;
    font-size: 15px;
  }
  
  .discount {
    color: green;
    margin-left: 5px;
    font-size: 15px;
    filter: blur(1px);
    -webkit-filter: blur(1px)
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: rgb(203, 198, 198);
    border-radius: 5px;
}
  .in-stock {
    color: green;
    font-weight: bold;
  }
  .quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }
  
  .actions {
    margin-top: 20px;
  }
  
  .actions .btn {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .buy-now {
    background-color: purple;
    color: white;
  }
  
  .add-to-cart {
    background-color: #e0e0e0;
  }
  
  .meta {
    margin-top: 20px;
  }
  </style>
  