<template>
  <div class="main-product-show">
    <product-nav />
    <div
      class="product-show grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center"
    >
      <div v-for="item in productList" :key="item.index" class="product-item">
        <img :src="item.image" />
        <h1>Product Name</h1>
        <p>Product description</p>
        <h1>0.0 LE</h1>
        <select name="quantinty">
          <option value="0">Select Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <button>Add to cart</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-content {
  position: relative;
  top: -50vh;
}
.main-product-show {
  position: relative;
}
.product-show {
  width: 75vw;
  background-color: rgba(33, 19, 13, 0.5);
  margin-left: calc(50% - 37.5vw);
  position: absolute;
  top: 20vh;
  border: 2px solid white;
  border-radius: 5px;
  z-index: 1;
  color: white;
}
.product-item {
  margin-top: 40px;
  height: 500px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 50px;
}
.product-item img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: auto;
}
.product-item h1 {
  font-size: 20px;
  font-weight: bold;
}
.product-item select {
  width: 60%;
  height: 50px;
  margin-top: 5px;
  color: black;
  border-radius: 10px;
  text-align: center;
}
.product-item button {
  width: 50%;
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 10px;
}
.product-item button:hover {
  background-color: rgba(33, 19, 13, 0.7);
  color: white;
}
</style>
<script>
import ProductNav from "../components/ProductNav.vue";
import axios from "axios";
import image1 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image2 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image3 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image4 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image5 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image6 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
export default {
  components: {
    ProductNav,
  },
  data() {
    return {
      designs: {},
      productList: [
        {
          image: image1,
          quantity: 0,
        },
        {
          image: image2,
          quantity: 0,
        },
        {
          image: image3,
          quantity: 0,
        },
        {
          image: image4,
          quantity: 0,
        },
        {
          image: image5,
          quantity: 0,
        },
        {
          image: image6,
          quantity: 0,
        },
      ],
      cart: [],
      totalPrice: 0,
      cartList: localStorage.getItem("token"),
    };
  },
  methods: {
    addToCart(design) {
      axios
        .post(
          `https://ffcd-156-209-45-239.eu.ngrok.io/api/giftcards/`,
          this.designs
        )
        .then((response) => {
          this.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      let cart = JSON.parse(localStorage.getItem("cartList"));
      cart = cart ? cart : [];
      design.quantity = Number(design.quantity);
      design.price = Number(design.price);
      cart.push(design);
      localStorage.setItem("cartList", JSON.stringify(cart));
      for (let i in cart) {
        this.totalPrice = cart.price[i] * cart.quantity[i];
      }
    },
  },
};
</script>
