<template>
  <div class="bestSellerPro">
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
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';  
export default { 
  setup() { 
    const router = useRouter();
    const navigateTo = (page) => { 
      router.push({ name: page });  
    }; 

    return { navigateTo }; 
  }, 
};
</script>

<style>
.bestSellerPro {
  padding: 1%;
  width: 100%;
}

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

.productGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product {
  width: 100%;
  height: 350px; 
  padding: 2%;
  align-items: center;
  border: solid #c3c0bd;
  box-shadow: 1px 1px 10px gray;
}
</style>
