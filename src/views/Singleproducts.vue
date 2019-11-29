<template>
    
    <div>
        <h1>boy {{ productId}} </h1>
<b-container>

     <b-col lg="4" sm="6" xs="6" class="mt-10">  
                                     <b-card
    :title = "product.name"
    :img-src = "product.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; box-shadow: 5px 5px 5px;"
    class="mb-4"
  >
    <b-card-text>
      N {{ product.price }}
    </b-card-text>

    <b-button href="#"  variant="primary"  size="sm">Buy Now</b-button>
  </b-card>
      </b-col>
</b-container>

    </div>
</template>
<script>
export default {
    
    data(){
           
           return{
               productId: this.$route.params.productId,

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

    

                   computed: {
                       product(){
                       return  this.products[this.productId]

                       
                       }
                   }
    
}
</script>