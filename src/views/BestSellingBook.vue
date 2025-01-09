<template>
    <div class="bestSellingBook">
      <div class="banner">
        <div class="slider" style="--quantity: 10">
          <div class="item" style="--position: 1"><img src="../assets/photo/book1.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 2"><img src="../assets/photo/book2.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 3"><img src="../assets/photo/book3.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 4"><img src="../assets/photo/book4.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 5"><img src="../assets/photo/book5.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 6"><img src="../assets/photo/book6.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 7"><img src="../assets/photo/book7.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 8"><img src="../assets/photo/book8.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 9"><img src="../assets/photo/book9.jpg" alt="" @click="navigateTo('shop')"></div>
          <div class="item" style="--position: 10"><img src="../assets/photo/book10.jpg" alt="" @click="navigateTo('shop')"></div>
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

        return { navigateTo, 

        }; 
      }, 
    };
  </script>


  <style scoped>
  .bestSellingBook{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  .banner {
    margin-top: 15px;
    width: 100%;
    height: 60vh;
    text-align: center;
    overflow: hidden;
    position: relative;
    
    
    
  }
  .banner .slider {
    position: absolute;
    width: 140px; /*adjust width of picture*/
    height: 190px; /*adjust height of picture*/
    top: 10%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 40s linear infinite; /* Increased duration from 20s to 40s */
    z-index: 2;
}

  @keyframes autoRun {
    from {
      transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
    }
    to {
      transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
    }
  }
  /*for that circle shape, space...*/
  .banner .slider .item { 
    position: absolute;
    inset: 0 0 0 0;
    transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
      translateZ(350px); /* adjust the size of circle*/
  }
  .banner .slider .item img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  .banner .content {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(1400px, 100vw);
    height: max-content;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }
  .banner .content h1 {
    font-family: 'ICA Rubrik';
    font-size: 16em;
    line-height: 1em;
    color: #25283B;
    position: relative;
  }
  .banner .content h1::after {
    position: absolute;
    inset: 0 0 0 0;
    content: attr(data-content);
    z-index: 2;
    -webkit-text-stroke: 2px #d2d2d2;
    color: transparent;
  }
  .banner .content .author {
    font-family: Poppins;
    text-align: right;
    max-width: 200px;
  }
  .banner .content h2 {
    font-size: 3em;
  }
  .banner .content .model {
    background-image: url(images/model.png);
    width: 100%;
    height: 75vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 1;
  }
  @media screen and (max-width: 1023px) {
    .banner .slider {
      width: 160px;
      height: 200px;
      left: calc(50% - 80px);
    }
    .banner .slider .item {
      transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(300px);
    }
    .banner .content h1 {
      text-align: center;
      width: 100%;
      text-shadow: 0 10px 20px #000;
      font-size: 7em;
    }
    .banner .content .author {
      color: #fff;
      padding: 20px;
      text-shadow: 0 10px 20px #000;
      z-index: 2;
      max-width: unset;
      width: 100%;
      text-align: center;
      padding: 0 30px;
    }
  }
  @media screen and (max-width: 767px) {
    .banner .slider {
      width: 100px;
      height: 150px;
      left: calc(50% - 50px);
    }
    .banner .slider .item {
      transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(180px);
    }
    .banner .content h1 {
      font-size: 5em;
    }
  }
  </style>
  