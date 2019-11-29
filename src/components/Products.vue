<template>
    
    <div>
       <template>
      <b-col md="12" class="mt-10">  
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
      N {{price}}
    </b-card-text>

    <b-button href="#" @click = "prodSingle(prodIndex)" variant="primary" size="sm">View Now</b-button>
  </b-card>
      </b-col>
</template>
    </div>

</template>

<script>
export default {
   
    props: [
        'name',
        'price',
        'image',
        'prodIndex'

            
    ],

    methods : {
      prodSingle(id) {
                this.$router.push('/prodSingle/' + id)
      }

    }
};
</script>

<style>

</style>