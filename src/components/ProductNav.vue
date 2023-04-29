<template>
  <div class="main-product">
    <nav class="side-bar flex items-center justify-center">
      <router-link to="/all">ALL PRODUCT</router-link> |
      <router-link to="/skin">SKIN CARE</router-link> |
      <router-link to="/hair">HAIR CARE</router-link> |
      <router-link to="/perfume">PERFUME</router-link>
    </nav>
    <router-view />
    <!-- <div class="product-show"></div> -->
  </div>
</template>
<style scoped>
.main-product {
  height: 100vh;
  background-image: url("../assets/flat-lay-bath-concept-accessories.jpg");
  background-size: cover;
  z-index: -1;
}
.side-bar {
  height: 80px;
  background-color: rgba(33, 19, 13, 0.7);
  position: sticky;
  top: 8vh;
  color: white;
  z-index: 99999;
}
router-link-exact-active {
  color: #42b983;
}
</style>
