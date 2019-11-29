<template>



<b-container >
<h1>hello {{ productId }}</h1>
    <b-row>

         <b-col lg="4" sm="6" xs="6" class="mt-10">  
                                     <b-card
    :title = "prod.name"
    :img-src = "prod.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; box-shadow: 5px 5px 5px;"
    class="mb-4"
  >
    <b-card-text>
      N {{ prod.price }}
    </b-card-text>

    <b-button href="#"  variant="primary"  size="sm">View  Products</b-button>
  </b-card>
      </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    
    data(){
        return{
           productId : this.$route.params.prodId,

                  goods: [
                   {
                       name : 'product one',
                       price : 30000,
                       image : 'https://picsum.photos/600/300/?image=25'

                   },
                   {
                       name : 'product one',
                       price : 30000,
                       image : 'https://picsum.photos/600/300/?image=25'

                   },
                   {
                       name : 'product one',
                       price : 30000,
                       image : 'https://picsum.photos/600/300/?image=25'

                   },
                   {
                       name : 'product one',
                       price : 30000,
                       image : 'https://picsum.photos/600/300/?image=25'

                   },
                   {
                       name : 'product one',
                       price : 30000,
                       image : 'https://picsum.photos/600/300/?image=25'

                   },
                   {
                       name : 'product one',
                       price : 30000,
                       image : 'https://picsum.photos/600/300/?image=25'

                   },
               ]



        }
        
    },

    computed: {
        prod(){
           return this.goods[this.prodId]
        }  
    }
}
</script>