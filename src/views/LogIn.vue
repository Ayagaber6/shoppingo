<template>
  <div class="log">
    <section class="input-content">
      <div v-show="login" class="input">
        <input
          type="email"
          placeholder="Enter Your E-mail"
          v-model="form.username_or_email_or_phone"
        />
        <br />
        <input type="password" placeholder="Password" v-model="form.password" />
        <br />
        <button @click="user()">login</button>
        <p><router-link to="/about">Forget Password</router-link></p>
      </div>
      <div>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_lp7qD9RDx1.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          v-show="done"
          @click="routToCorporate()"
        ></lottie-player>
      </div>
    </section>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
.log {
  height: 100vh;
  background-size: cover;
  background-image: url(../assets/medium-shot-happy-woman-carrying-shopping-bags.jpg);
}
.input-content {
  position: fixed;
  top: 15%;
  left: 60%;
  background-color: rgba(33, 19, 13, 0.5);
  width: 30%;
  border-radius: 10px;
  border: 3px solid white;
  height: 60vh;
  margin-top: 70px;
  animation-name: example;
  animation-duration: 3s;
}
@keyframes example {
  from {
    opacity: 0;
    transform: perspective(0);
  }
  to {
    opacity: 1;
    transform: perspective(20);
  }
}
input {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 30px;
}
button {
  width: 30%;
  height: 40px;
  border-radius: 30px;
  border: 2px solid white;
  color: white;
  margin-top: 10px;
  animation-name: lightingborder;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes lightingborder {
  50% {
    border-color: #a7a7a0;
  }
}
button:hover {
  background-color: white;
  color: black;
}
.input {
  margin-top: 25%;
}
.input p {
  text-decoration-line: underline;
  margin-top: 20px;
  color: white;
}
@media only screen and (max-width: 610px) {
  .log {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .input-content {
    width: 50%;
    left: 40%;
  }
  button {
    width: 50%;
  }
}
</style>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      form: {},
      done: false,
      login: true,
    };
  },
  methods: {
    user() {
      axios
        .post("https://6905-156-209-44-45.eu.ngrok.io/users/login/", this.form)
        .then((response) => {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          // this.loadUser();
          this.$router.push({
            name: "profile",
          });
        });
    },
    // loadUser() {
    //   axios
    //     .get(`https://6905-156-209-44-45.eu.ngrok.io/users/login/`, {
    //       headers: {
    //         // "Access-Control-Allow-Origin": "*",
    //         "ngrok-skip-browser-warning": "11",
    //       },
    //     })
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    routToHome() {
      this.login = false;
      this.done = true;
      this.$router.push({
        name: "/profile",
      });
    },
  },
};
</script>
