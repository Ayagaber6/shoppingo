<template>
  <div>
    <div class="log">
      <section class="input-content">
        <div class="input">
          <input
            type="text"
            placeholder="Enter your full name"
            v-model="user.full_name"
            v-validate="'required|alpha'"
          />
          <br />
          <span v-show="errors.has('full-name')" class="input-span">
            {{ errors.first("full-name") }}
          </span>
          <input
            type="text"
            placeholder="User Name"
            v-model="user.username"
            v-validate="'required'"
          />
          <br />
          <span v-show="errors.has('user-name')" class="input-span">
            {{ errors.first("user-name") }}
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            v-model="user.phone_number"
            v-validate="'required|numeric|'"
          />
          <br />
          <span v-show="errors.has('phone-number')" class="input-span">
            {{ errors.first("phone-number") }}
          </span>
          <input
            type="email"
            placeholder="Enter Your E-mail"
            v-model="user.email"
            v-validate="'required|email'"
          />
          <br />
          <span v-show="errors.has('email')" class="input-span">
            {{ errors.first("email") }}
          </span>
          <input
            type="password"
            placeholder="Password"
            v-model="user.password"
          />
          <br />
          <span v-show="errors.has('password')" class="input-span">
            {{ errors.first("password") }}
          </span>
          <button @click="signup()">Sign Up</button>
          <p><router-link to="/login">you have an account</router-link></p>
        </div>
      </section>
    </div>
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
  background-image: url(../assets/medium-shot-smiley-woman-carrying-shopping-bags.jpg);
}
.input-content {
  position: fixed;
  top: 13%;
  /* top: 8%; */
  left: 10%;
  background-color: rgba(33, 19, 13, 0.5);
  width: 30%;
  border-radius: 10px;
  border: 3px solid white;
  height: 85vh;
  /* height: 90vh; */
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
  margin-top: 20%;
  /* margin-top: 15%; */
}
.input p {
  text-decoration-line: underline;
  color: white;
  margin-top: 20px;
  /* margin-top: 20px; */
}
@media only screen and (max-width: 1440px) {
  .input-content {
    top: 8%;
    height: 90vh;
  }
  .input {
    margin-top: 8%;
  }
  button {
    width: 40%;
  }
}
@media only screen and (max-width: 786px) {
  .log {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .input-content {
    width: 50%;
  }
  @media only screen and (max-width: 375px) {
    .input-content {
      width: 80%;
    }
  }
}
</style>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signup() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios
            .post(
              "https://6905-156-209-44-45.eu.ngrok.io/users/signup/",
              this.user
            )
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(11111);
        }
      });
    },
  },
};
</script>
