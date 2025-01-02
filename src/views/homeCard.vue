<template>
<div class="card-group">
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>

  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class= "pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
  <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>
  <div class="card">
    <img class="pic" src="../assets/photo/card.jpg" alt="Image Description">
  </div>

 
</div>


</template>

<script>
  import { useRouter } from 'vue-router'; // Import Vue Router 
  export default { 
    setup() { 
      const router = useRouter(); // Initialize router 
      // // Define navigateTo method 
      const navigateTo = (page) => { 
        router.push({ name: page }); // Navigate to the specified page 
        }; 

        return { navigateTo, 

        }; 
      }, 
    };
</script>

<style>
.pic{
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
}
.card-group {
  max-width: auto;
  display: flex;
  column-gap: 40px;
  padding: 0px 5px 5px 5px;
  overflow-x: scroll;
}

.card {
  margin-top: 20px;
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  height: 250px;
  background-image: linear-gradient(85deg, #5d2e72, #f49d7a);
  padding: 7px;
  box-shadow: -30px 0 12px rgba(11, 9, 9, 0.5);
  border-radius: 10px;
  transition: transform 250ms;
}

.card:not(:first-child) {
  margin-left: -130px;
}

.card:hover {
  transform: translate(-8px, -16px) rotate(3deg);
}

.card:hover ~ .card {
  transform: translateX(130px);
}

</style>