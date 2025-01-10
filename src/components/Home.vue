<template>
  <div class="home">
    <div class="intro">
      <div class="title">Best products for your Education</div>
      <img class="introPic" src="../assets/photo/intro.jpg" alt="banner">
      
    </div>
    <div class="bestSellerPro">
      <div class="bestSellingPro">BEST SELLING PRODUCTS</div>
      <div class="productGrid">
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/book.jpg" alt="book">
          <div class="proName">BOOKS</div> 
        </div>
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/color.png" alt="book">
          <div class="proName">CRAYON</div>
        </div>
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/PEN.jpg" alt="book">
          <div class="proName">PEN</div>
        </div>
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/stickerNote.png" alt="book">
          <div class="proName">STICKER NOTE</div>
        </div>
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/pencialCase.png" alt="book">
          <div class="proName">Pencial Case</div>
        </div>
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/correctionPen.jpg" alt="book">
          <div class="proName">Correction Pen</div>
        </div>
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/keychain.png" alt="book">
          <div class="proName">KEYCHAIN</div>
        </div>
        <div class="product" @click="navigateTo('shop')">
          <img class="proPic" src="../assets/photo/notebook.png" alt="book">
          <div class="proName">NOTEBOOK</div>
        </div>
      </div>
    </div>
    <div class="bestSellingPro">BEST SELLING BOOKs</div>
    <BestSellingBook />
    <homeCard/>
    
  </div>
</template>

<script> 
import homeCard from '../views/homeCard.vue';
import BestSellingBook from '../views/BestSellingBook.vue' 
import { useRouter } from 'vue-router'


export default { 
  components: { 
    BestSellingBook,
    homeCard,
    
  },
  setup() { 
    const router = useRouter() 
    const navigateTo = (page) => { router.push({ name: page }) // Use router.push to navigate 
    } 
    return { navigateTo, } 
  },
} 
</script>

<style>
.proName {
  text-align: center;
  font-size: medium;
  font-weight: 600;
  font-family: sans-serif;
}

.proPic {
  width: 100%;
  height: 90%;
  padding: 4%;
}

.bestSellingPro {
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
  font-weight: 1000;
  color: #1d3a4c;
}

.introPic {
  width: 100%;
  height: 100%;
}

.home {
  width: 100%;
  height: auto;
  padding: 2%;
}

.intro {
  display: flex;
  justify-content: baseline;
  gap: 5px;
  width: 100%;
  height: 450px;
}

.title {
  padding: 2%;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 50px;
  font-weight: 1000;
  color: #1d3a4c;
}

.bestSellerPro {
  padding: 1%;
  height:400px;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
}

.product {
  width: 100%;
  height: 250px;
  padding: 2%;
  align-items: center;
  border: solid #c3c0bd;
}

</style>
