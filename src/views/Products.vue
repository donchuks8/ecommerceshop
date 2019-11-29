            <template>
    
    <b-container class="mt-4">
        <b-row>

       <Products  v-for="(product , index) in goods"  :key = "index"
                 v-bind:name = "product.name" 
                 v-bind:price = "product.price"
                 v-bind:image = "product.image"
                 v-bind:prodIndex = "index"
                 
                 />

                 
                 </b-row>
    </b-container>
</template>

<script>

import Products from  '@/components/Products';

export default {
       
       data: function(){
           return {
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

       

    components: {
        Products
    },
    
}
</script>

<style >

</style>