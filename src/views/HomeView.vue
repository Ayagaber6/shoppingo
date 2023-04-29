<template>
  <div>
    <div class="banner">
      <div class="banner-content">
        <h1>Everything You Need in Your Beauty</h1>
        <div
          class="btn grid sm:grid-cols-2 grid-cols-1 justify-around items-center"
        >
          <router-link to="/all">
            <button>Shop Now</button>
          </router-link>
          <router-link to="/sign">
            <button>Get Started</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="product-type grid lg:grid-cols-3 grid-cols-1 justify-between">
      <div>
        <img
          src="../assets/fiancee-white-fashionable-dress-with-beautiful-sleeves-perfume-hands.jpg"
        />
        <div class="product-p">
          <h1>PERFUME</h1>
          <p>
            There's fragrance for everyone to discover in our extensive
            inventory of designer fragrance
          </p>
          <router-link to="/perfume">
            <button>Order Now</button>
          </router-link>
        </div>
      </div>
      <div>
        <img src="../assets/little-white-flowers-lie-brown-hair-curls.jpg" />
        <div class="product-p">
          <h1>HAIR CARE</h1>
          <p>
            No more bad hair days, we carry the finest hair care product whether
            you choose to put it up or leave it down, whatever style you choose
            ,guaranteed we have the hair care product, shampoo, conditioner and
            oils just for you
          </p>
          <router-link to="/hair">
            <button>Order Now</button>
          </router-link>
        </div>
      </div>
      <div>
        <img src="../assets/portrait-woman-with-facial-mask-half-face.jpg" />
        <div class="product-p">
          <h1>SKIN CARE</h1>
          <p>
            Our facials skin care items will keep your skin care regimen top
            notch
          </p>
          <router-link to="/skin">
            <button>Order Now</button>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <img
        src="../assets/full-shot-surprised-woman-with-colorful-bags (1).jpg"
        class="footer-img"
      />
      <footer class="grid sm:grid-cols-4 grid-cols-2 justify-around">
        <div>
          <h1>QUICK LINKS</h1>
          <router-link to="/">Home</router-link> <br />
          <router-link to="/about">About us</router-link><br />
          <router-link to="/sign">Sign up</router-link><br />
          <router-link to="/login">Login</router-link>
        </div>
        <div>
          <h1>PRODUCT</h1>
          <router-link to="/perfume">Perfume</router-link><br />
          <router-link to="/hair">Hair care</router-link><br />
          <router-link to="/skin">Skin care</router-link>
        </div>
        <div>
          <h1>LOCATIONS</h1>
        </div>
        <div>
          <h1>CONTACT</h1>
        </div>
      </footer>
    </div>
    <router-view />
  </div>
</template>
<style scoped>
.banner {
  height: 90vh;
  overflow: hidden;
  position: relative;
  top: 0vh;
  background-image: url("../assets/full-shot-surprised-woman-with-colorful-bags.jpg");
  background-size: cover;
}
.home-banner {
  z-index: -1;
  width: 100vw;
}
.banner-content {
  font-size: 50px;
  position: absolute;
  top: 20vh;
  left: 20vw;
  width: 60vw;
  height: 45vh;
  border: 3px solid white;
  border-radius: 3px;
  color: white;
  background-color: rgba(33, 19, 13, 0.5);
  padding-top: 5%;
}
.btn {
  font-size: 30px;
  width: 100%;
  height: 50%;
}
.btn button {
  border: 2px solid white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  animation-name: lightingborder;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes lightingborder {
  50% {
    border-color: #a7a7a0;
  }
}
.btn button:hover {
  background-color: white;
  color: black;
}
.product-type {
  width: 80vw;
  margin: auto;
  margin-top: 20px;
  position: relative;
  top: -15vh;
}
.product-type img {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin: auto;
  border: 10px solid white;
}
.product-p {
  height: 70%;
  margin: 30px;
  margin-bottom: 15vh;
  background-color: rgba(33, 19, 13, 0.9);
  z-index: -1;
  position: relative;
  top: -15vh;
  color: white;
  font-size: 20px;
  padding-top: 170px;
  box-shadow: 0px 5px 7px lightgrey;
  padding-left: 30px;
  padding-right: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.product-p h1 {
  font-size: 25px;
  font-weight: bold;
}
.product-p p {
  margin-top: 25px;
}
.product-p button {
  position: absolute;
  bottom: 5%;
  margin-top: 20px;
  width: 150px;
  height: 70px;
  left: calc(50% - 75px);
  border: 2px solid white;
  border-radius: 2px;
}
footer {
  height: 35vh;
  background-color: rgba(33, 19, 13, 0.7);
  color: white;
  z-index: 1;
  position: relative;
  bottom: 0;
  padding-top: 50px;
}
footer h1 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.footer-img {
  z-index: -1;
  position: absolute;
}
.footer-info {
  text-align: left;
  margin-top: 30px;
}
</style>
