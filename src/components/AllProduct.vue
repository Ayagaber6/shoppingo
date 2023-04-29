<template>
  <div class="main-product-show">
    <product-nav />
    <div
      class="product-show grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center"
    >
      <div v-for="item in productList" :key="item.index" class="product-item">
        <img :src="item.image" />
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>
        <h1>{{ item.price }} LE</h1>
        <select v-model="item.quantity" name="quantinty">
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
        <button @click="addToCart(item)">Add to cart</button>
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
  animation-name: show;
  animation-duration: 3s;
  z-index: 1;
  color: white;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
import image7 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image8 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image9 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image10 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image11 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
import image12 from "../assets/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
export default {
  components: {
    ProductNav,
  },
  data() {
    return {
      products: [],
      productList: [
        {
          image: image1,
          name: "product 1",
          description: "product 1 description",
          quantity: 0,
          price: 2,
        },
        {
          image: image2,
          name: "product 2",
          description: "product 2 description",
          quantity: 0,
          price: 5,
        },
        {
          image: image3,
          name: "product 3",
          description: "product 3 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image4,
          name: "product 4",
          description: "product 4 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image5,
          name: "product 5",
          description: "product 5 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image6,
          name: "product 6",
          description: "product 6 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image7,
          name: "product 7",
          description: "product 7 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image8,
          name: "product 8",
          description: "product 8 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image9,
          name: "product 9",
          description: "product 9 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image10,
          name: "product 10",
          description: "product 10 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image11,
          name: "product 11",
          description: "product 11 description",
          quantity: 0,
          price: 0,
        },
        {
          image: image12,
          name: "product 12",
          description: "product 12 description",
          quantity: 0,
          price: 0,
        },
      ],
      cart: [],
      totalPrice: 0,
      cartList: localStorage.getItem("token"),
    };
  },
  methods: {
    addToCart(product) {
      axios
        .get(`https://ab88-156-209-44-45.eu.ngrok.io/products/`, this.products)
        .then((response) => {
          this.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      let cart = JSON.parse(localStorage.getItem("cartList"));
      cart = cart ? cart : [];
      product.quantity = Number(product.quantity);
      product.price = Number(product.price);
      cart.push(product);
      localStorage.setItem("cartList", JSON.stringify(cart));
      for (let i in cart) {
        this.totalPrice = cart.price[i] * cart.quantity[i];
      }
    },
  },
};
</script>
