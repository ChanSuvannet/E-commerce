<template>
  <div class="home">
    <div class="intro">
      <div class="title">Best products for your Education</div>
      <img class="introPic" src="../assets/photo/intro.jpg" alt="banner">
    </div>

    <div class="titleCategory">BEST SELLING PRODUCTS</div>
    <BestSellingPro/>
    
    <div class="titleCategory">BEST SELLING BOOKS</div>
    <BestSellingBook />

    <div class="titleCategory">NEW PRODUCTS INSTOCK</div>
    <homeCard/>
    
  </div>
</template>

<script> 
import homeCard from '../views/homeCard.vue';
import BestSellingBook from '../views/BestSellingBook.vue' 
import BestSellingPro from '../views/BestSellingPro.vue'
import { useRouter } from 'vue-router'


export default { 
  components: { 
    BestSellingBook,
    homeCard,
    BestSellingPro,
    
  },
} 
</script>

<style>

.titleCategory {
  margin-top: 15px;
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

</style>
