<template>
  <div id="app">
    <div
      class="main-nav grid lg:grid-cols-3 grid-cols-3 items-center justify-between"
    >
      <nav class="left-nav col-span-2 text-left">
        <router-link to="/">HOME</router-link>
        <router-link to="/about">ABOUT US</router-link>
        <router-link to="/all">PRODUCT</router-link>
        <router-link to="/profile">PROFILE</router-link>
      </nav>
      <nav class="right-nav lg:inline hidden">
        <router-link to="/sign">SIGN UP</router-link>
        <router-link to="/login">LOGIN</router-link>
        <router-link to="/cart">
          <i class="cart fa fa-cart-shopping"></i>
          <span data-aos="fade-down-left" class="total-quantity">
            {{ cartList.length }}
          </span>
        </router-link>
        <i
          @click="logout()"
          title="LOGOUT"
          class="fa fa-right-from-bracket"
        ></i>
      </nav>
      <div class="lg:hidden inline">
        <i class="fa fa-bars" @click="respNav()"></i>
      </div>
      <nav class="lg:hidden grid grid-row-4 resp-nav" v-show="nav">
        <router-link to="/sign">SIGN UP</router-link>
        <router-link to="/login">LOGIN</router-link>
        <router-link to="/cart">
          <i class="cart fa fa-cart-shopping"></i>
          <span data-aos="fade-down-left" class="total-quantity">
            {{ cartList.length }}
          </span>
        </router-link>
        <i
          @click="logout()"
          title="LOGOUT"
          class="fa fa-right-from-bracket"
        ></i>
      </nav>
    </div>
    <router-view />
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
      nav: false,
    };
  },
  created() {
    if (localStorage.getItem("cartList")) {
      setInterval(() => {
        this.cartList = JSON.parse(localStorage.getItem("cartList"));
      }, 100);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({
        name: "home",
      });
    },
    respNav() {
      this.nav = true;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-nav {
  height: 8vh;
  z-index: 99999;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid gray;
  background-color: rgba(33, 19, 13, 0.7);
  align-content: center;
}
.left-nav {
  padding-left: 10%;
}
nav {
  color: white;
  a {
    font-weight: bold;
    color: white;
    padding: 20px;

    &.router-link-exact-active {
      color: #8eba17;
    }
  }
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: #8eba17;
  border-radius: 5px;
}
.fa-right-from-bracket {
  cursor: pointer;
}
.total-quantity {
  padding: 2px;
  margin: 3px;
  font-size: 15px;
  background-color: #8eba17;
  border-radius: 50%;
  color: white;
  font-weight: bold;
}
.fa-bars {
  color: white;
}
.resp-nav {
  position: absolute;
  top: 8vh;
  right: 10vw;
  background-color: rgba(33, 19, 13, 0.7);
}
</style>
