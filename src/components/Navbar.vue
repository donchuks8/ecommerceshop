<template>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light " >
      <div class="container">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" ><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><router-link to="/about">About</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><router-link to ="/products">Products</router-link></a>
      </li>

      <li>

        <a class="nav-link"><router-link to="/contact_us">Contact Us</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>