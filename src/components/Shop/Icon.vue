<template>
    <div class="relative">
        <svg-icon type="mdi" :path="shop" class="hover:scale-90 cursor-pointer"  />
        <!-- Badge -->
        <span
          v-if="counter.cartCount > 0"
          class="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >{{ counter.cartCount }}
        </span>
    </div>
</template>

<script>
    import { ref } from "vue";
    import { mdiShoppingOutline } from "@mdi/js";
    import SvgIcon from '@jamescoyle/vue-icon';
    // import  {useCartstore} from '../../stores/counter'
    import {useCartstore} from '../../stores/counter'



    export default {
        name: 'Icon',
        props: {
            cartCount: {
                type: Number,
                required: true
            }
        },
        components:{
            SvgIcon
        },
        data(){
            return{
                shop: mdiShoppingOutline

            }
        },
        computed: {
        // Access the Pinia store via a computed property
        counter() {
                return useCartstore();
            },
        },
    }

</script>