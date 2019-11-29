<template>
      <b-col lg="4" sm="6" xs="6" class="mt-10">  
                                     <b-card
    :title = "name"
    :img-src = "image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; box-shadow: 5px 5px 5px;"
    class="mb-4"
  >
    <b-card-text>
      N {{ price }}
    </b-card-text>

    <b-button href="#" @click = "gotoSingleproductsPage(productIndex)" variant="primary"  size="sm">View  Products</b-button>
  </b-card>
      </b-col>
</template>

<script>
export default {
    props:[
        'name',
        'price',
        'image',
        'productIndex'
    ],

    methods: {
        gotoSingleproductsPage(id){
            this.$router.push('/products/'+ id )
        }
    }
    
}
</script>