<template>
  <div class="home">
    <div class="intro">
      <div class="title">
        <h1>Best for products for your Education</h1>
      </div>
      <div class="imageIntro">
        image
      </div>
    </div>
    <div class="bestSeller">
      <h2>Best Sellers</h2>
      <div class="productGrid">
        <div class="product">Shappener</div>
        <div class="product">Notebook</div>
        <div class="product">Highlighter</div>
        <div class="product">Pen</div>
        <div class="product">Book</div>
        <div class="product">Color Pen</div>
        <div class="product">Ruler</div>
        <div class="product">Pink Pen</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home{
  width: 100%;
  height: auto;
  padding: 2%;
  border: solid black;
}
.intro{
  display: flex;
  justify-content: baseline;
  gap: 5px;
  width: 100%;
  height: 230px;
  border: solid black;
}
.title{
  padding: 2%;
  width: 50%;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display:flex;
}
.bestSeller{
  padding: 1%;
  
}
.productGrid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
}
.product{
  width: 100%;
  height: 150px;
  padding: 2%;
  align-items: center;
  border: solid black;
}
</style>

