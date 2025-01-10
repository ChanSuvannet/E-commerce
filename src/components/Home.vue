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

<style scoped>
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
  height: auto;
}

.home {
  width: 100%;
  height: auto;
  padding: 2%;
}

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.title {
  padding: 2%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 50px;
  font-weight: 1000;
  color: #1d3a4c;
}

@media (min-width: 768px) {
  .intro {
    flex-direction: row;
    height: 450px;
  }

  .title {
    width: 50%;
  }

  .introPic {
    width: 50%;
    height: 100%;
  }
}
</style>
