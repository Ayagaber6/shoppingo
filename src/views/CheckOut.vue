<template>
  <div class="main-container">
    <div class="child-container grid grid-cols-2">
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_OmS8YIjyKd.json"
        background="transparent"
        speed="1"
        style="height: 100%"
        loop
        autoplay
        v-show="checkout"
        class="done"
      ></lottie-player>
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_lp7qD9RDx1.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        v-show="done"
        @click="routToHome()"
      ></lottie-player>
      <div class="checkout-info">
        <h1>DELIVERY ADDRESS</h1>
        <table>
          <tr>
            <td>
              <i class="fa-solid fa-user"></i>
              <label>First Name</label> <br />
              <input type="text" />
            </td>
            <td>
              <i class="fa-solid fa-user"></i>
              <label>Last Name</label> <br />
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa-solid fa-envelope"></i>
              <label>Email</label> <br />
              <input type="email" />
            </td>
            <td>
              <i class="fa-solid fa-phone"></i>
              <label>Phone Number</label> <br />
              <input type="tel" />
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa-solid fa-location-dot"></i>
              <label>Address</label> <br />
              <input type="text" placeholder="Line 1" />
            </td>
            <td>
              <label>City</label> <br />
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Governorate</label> <br />
              <input type="text" />
            </td>
            <td>
              <label>Code</label> <br />
              <input type="number" />
            </td>
          </tr>
        </table>
        <button @click="doneCheckout()">Checkout</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      form: {},
      done: false,
      checkout: true,
    };
  },
  methods: {
    doneCheckout() {
      this.checkout = false;
      this.done = true;
    },
    routToHome() {
      this.$router.push({
        name: "/",
      });
    },
  },
};
</script>
<style scoped>
.main-container {
  background-image: url("../assets/medium-shot-woman-escalators.jpg");
  background-size: cover;
}
.child-container {
  width: 80vw;
  height: 100vh;
  margin: auto;
}
.checkout-info {
  height: 80vh;
  position: relative;
  top: 15vh;
  background-color: rgba(33, 19, 13, 0.5);
  border: 2px solid white;
  color: white;
  padding-top: 60px;
}
.checkout-info table {
  margin: auto;
  margin-top: 40px;
  text-align: left;
}
.checkout-info h1 {
  font-size: 22px;
  font-weight: bold;
}
.checkout-info table input {
  margin-right: 40px;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
}
label {
  font-weight: bold;
}
i {
  margin-right: 5px;
}
button {
  background-color: #8eba17;
  color: white;
  width: 150px;
  height: 60px;
  font-size: 20px;
  margin-top: 50px;
  border-radius: 10px;
}
button:hover {
  background-color: #00db57;
}
.done {
  animation-name: showDone;
  animation-delay: 3s;
}
@keyframes showDone {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
