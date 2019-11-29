<template>
    <div >
<!--banner section-->
    <div class="im">
  <!--<h1 class="text-center text-white">Welcome to my Ecommerce Store</h1>-->

<Carousel/>
  
    </div>

<!-- product-->

<h3 class="text-center mt-3">Product</h3>
      <div>

         <b-container class="mt-5">
             <b-row>       

             <ProductItem  v-for = "(product, index ) in products" :key = "index" 
             v-bind:name =  "product.name"
             v-bind:price = "product.price"
             v-bind:image = "product.image" 
              v-bind:productIndex = "index"
             />
            

             </b-row>
         </b-container>
      </div>


    </div>
</template>

<script>
import ProductItem from '../components/ProductItem'; 
import Carousel from '../components/Carousel';
export default {
           
           data(){
               return{
            products: [
                {
                    
               name :'product one',
               price : 2000,
               image :'https://picsum.photos/600/300/?image=25'
                },

                {
               name :'product one',
               price : 2000,
               image :'https://picsum.photos/600/300/?image=25'
                },

                {
               name :'product one',
               price : 2000,
               image :'https://picsum.photos/600/300/?image=25'
                },

                {
               name :'product one',
               price : 2000,
               image :'https://picsum.photos/600/300/?image=25'
                },

                {
               name :'product one',
               price : 2000,
               image :'https://picsum.photos/600/300/?image=25'
                },

                {
               name :'product one',
               price : 2000,
               image :'https://picsum.photos/600/300/?image=25'
                }

                   ]
                

               }
               
           },

    components:{
        ProductItem,
        Carousel,
    }
    
}
</script>


<style scoped>
.img{
    height: 60vh;
    background-image: url("https://picsum.photos/1024/400/?image=41");
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 25vh;
    padding-top: 25vh;
}

</style>