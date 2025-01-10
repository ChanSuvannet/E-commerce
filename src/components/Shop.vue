<template>
  <div id="app">
    <div class="left-bar">
      <Sidebar  />
    </div>
    <div class="side-bar">
      <div class="contain">
        <SearchBox />
        <div class="top-bar">
          <div>
            <a href="#"><span>Showing 1-8 of 100 results</span></a>
          </div>
          <div>
            <span>Status: </span>
            <a href="#"><span> Top Rated </span></a>
            <span>|</span>
            <a href="#"><span> Popular </span></a>
            <span>|</span>
            <a href="#"><span> Newest </span></a>
          </div>
        </div>
      </div>
      <div class="card-container">
        <router-view />   
      </div>
    </div>
  </div>
</template>

<script>
import ShopCard from '../views/Shop/ShopCard.vue'
import SearchBox from '../views/Shop/searchbox.vue'
import Sidebar from '../views/Shop/Sidebar.vue'
import ShopCardDetail from '../views/Shop/ShopCardDetail.vue'
import CartNotification from '../views/Shop/CartNotification.vue'
// import {useCartstore} from '../../stores/counter'
import { useRouter } from 'vue-router';
import {useCartstore} from '../stores/counter'

import CardIcon from '../views/Shop/CardIcon.vue'
 export default {
  name: 'Shop',
  components: {
    ShopCard,
    SearchBox,
    Sidebar,
    ShopCardDetail,
    CartNotification,
    CardIcon
  },
  data() {
    return {
      notificationMessage: '',
    };
  },
  computed: {
    catStore(){
      return useCartstore();
    }
  },
  methods: {
    handleAddToCart(title){
      this.catStore.addItemToCart(title);
    }
  },
};
</script>

<style scoped>
#app {
  display: flex;
  gap: 20px;
  margin-left: 60px;
  background-color:   rgb(241, 241, 241);
}
.left-bar {
  margin-left: -20px;
}


.contain {
  display: grid;
  grid-template-columns: 500px auto ;
  align-items: center;
  gap: 16px;
  width: 100%;
}
.top-bar {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

span {
  font-weight: bold;
}
a {
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
  color: red;
}

.card-container{
  padding: 0px;
  margin: 0px;
}

</style>
