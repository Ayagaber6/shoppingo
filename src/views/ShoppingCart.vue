<template>
  <div class="cart">
    <div
      class="cart-details grid lg:grid-cols-2 grid-cols-1"
      v-for="(item, index) in cartList"
      :key="index"
    >
      <img :src="item.image" class="img-position flex justify-center" />
      <table>
        <tr>
          <td>
            <h1>Product Name:</h1>
          </td>
          <td>
            <p>{{ item.name }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Product Description:</h1>
          </td>
          <td>
            <p>{{ item.description }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Price:</h1>
          </td>
          <td>
            <h1>{{ item.price }} LE</h1>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Quantity:</h1>
          </td>
          <td>
            <input type="number" v-model="item.quantity" />
          </td>
        </tr>
        <tr>
          <td>
            <h1>Total Price:</h1>
          </td>
          <td>
            <h1>{{ Number(item.price) * Number(item.quantity) }} LE</h1>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <i @click="removeList(index)" class="fa fa-trash-can remove"></i>
          </td>
        </tr>
      </table>
    </div>
    <div class="checkout grid grid-cols-2 items-center">
      <h1>Total Price: {{ totalPrice }} LE</h1>
      <router-link to="/checkout">
        <button>Checkout</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartList: localStorage.getItem("cartList")
        ? JSON.parse(localStorage.getItem("cartList"))
        : [],
      localStorage,
      total: localStorage.getItem("total"),
      checkoutTotalPrice: [],
      totalPrice: 0,
    };
  },
  methods: {
    removeList(index) {
      this.cartList.splice(index, 1);
      localStorage.removeItem("cartList");
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
    },
    calcTotal() {
      this.total = Number(this.price) * Number(this.quantity);
    },
    checkoutTotal() {
      for (let i in this.cartList) {
        this.totalPrice =
          Number(this.cartList[i].price) * Number(this.cartList[i].quantity);
        this.checkoutTotalPrice.push(this.totalPrice);
      }
      this.totalPrice = this.checkoutTotalPrice.reduce((a, b) => a + b, 0);
    },
    checkout() {
      this.cartList.map((product) => {
        product.store = Number(localStorage.getItem("storeID"));
      });
      console.log(this.cartList);
    },
  },
  created() {
    this.checkoutTotal();
  },
};
</script>
<style scoped>
.cart {
  background-image: url("../assets/close-up-woman-carrying-shopping-bags.jpg");
  background-size: cover;
  height: 100vh;
}
.cart-details {
  width: 75vw;
  background-color: rgba(33, 19, 13, 0.5);
  border: 2px solid white;
  margin: auto;
  border-radius: 5px;
  position: relative;
  top: 10vh;
  text-align: left;
  color: white;
  margin-bottom: 20px;
}
.cart-details table tr {
  height: 50px;
}
.cart-details table td {
  width: 50%;
}
.cart-details input {
  width: 50px;
  height: 30px;
  color: black;
  text-align: center;
}
.checkout {
  width: 75vw;
  margin: auto;
  height: 100px;
  background-color: rgba(33, 19, 13, 0.5);
  position: relative;
  top: 10vh;
  color: white;
  font-size: 20px;
}
.checkout button {
  border: 2px solid white;
  width: 30%;
  height: 60px;
  border-radius: 5px;
}
.checkout button:hover {
  background-color: rgba(33, 19, 13, 0.7);
}
h1 {
  font-size: 20px;
}
.img-position {
  height: 100%;
  margin-left: 10px;
}
.remove {
  cursor: pointer;
}
</style>
