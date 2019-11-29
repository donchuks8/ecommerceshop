<template>
  <div id="app">
   
      <!--<Navbar/>-->
      <Header />
      

    <router-view />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';

export default {
 
  components: {
 
    Header,
    Footer
    
  },
};
</script>

<style>

</style>
