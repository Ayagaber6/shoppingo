<template>
  <div class="contain">
    <div class="account">
      <table>
        <tr>
          <td>
            <i class="fa-solid fa-user"></i>
            <label>User Name:</label>
            <br />
            <p>{{ user.username }}</p>
          </td>
          <td>
            <label class="input">Name:</label>
            <br />
            <input
              type="text"
              placeholder="Your name"
              v-if="editable"
              v-model="user.full_name"
            />
            <p v-else>{{ user.full_name }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <i class="fa-solid fa-envelope"></i>
            <label>Email:</label>
            <br />
            <p>{{ user.email }}</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <i class="fa-solid fa-location-dot"></i>
            <label>Address:</label>
            <br />
            <input
              type="text"
              placeholder="Line 1"
              v-if="editable"
              v-model="user.address.line1"
            />
            <p v-else>{{ user.address.line1 }}</p>
          </td>
          <td>
            <label>City:</label>
            <br />
            <input
              type="text"
              v-if="editable"
              v-model="user.address.city.city_name"
            />
            <p v-else>{{ user.address.city.city_name }}</p>
          </td>
          <td>
            <label class="input">Governorate:</label>
            <br />
            <input
              type="text"
              v-if="editable"
              v-model="user.address.governorate"
            />
            <p v-else>{{ user.address.city.governorate.governorate_name }}</p>
          </td>
          <td>
            <label>Code:</label>
            <br />
            <input type="text" v-if="editable" v-model="user.address.code" />
            <p v-else>{{ user.address.city.governorate.code.code_number }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <i class="fa-solid fa-phone"></i>
            <label>Phone number:</label>
            <br />
            <input type="text" v-if="editable" v-model="user.phone_number" />
            <p v-else>{{ user.phone_number }}</p>
          </td>
          <td>
            <label>Birth of Date:</label>
            <br />
            <input type="date" v-if="editable" />
            <p v-else>{{ user.birth_date }}</p>
          </td>
        </tr>
        <tr v-show="hidePass">
          <td>
            <label>Current Password</label><br />
            <input type="password" />
          </td>
          <td>
            <label>New Password</label><br />
            <input type="password" />
          </td>
          <td>
            <label>Confirm Password</label><br />
            <input type="password" />
          </td>
        </tr>
      </table>
      <div class="flex flex-cols-2 gap-4 btn">
        <button class="ch-pass" v-show="passBtn" @click="hidePass = true">
          Change Password
        </button>
        <button v-if="!editable" @click="(editable = true), (passBtn = true)">
          Edit
        </button>
        <button v-else @click="editUser">Save</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contain {
  background-image: url("../assets/medium-shot-woman-carrying-shopping-bags.jpg");
  background-size: cover;
  position: relative;
  height: 100vh;
}
.account {
  position: absolute;
  left: calc(50% - 30vw);
  top: 15vh;
  color: white;
  width: 60vw;
  height: 80vh;
  background-color: rgba(33, 19, 13, 0.5);
  border-radius: 10px;
  border: 3px solid white;
}
.account table {
  width: 90%;
  margin: auto;
  margin-top: 10vh;
  text-align: left;
}
.account table tr {
  height: 80px;
}
i {
  color: white;
  padding-right: 10px;
}
.input-box {
  box-sizing: border-box;
  border-radius: 30px;
}
.btn {
  position: absolute;
  bottom: 10%;
  right: 10%;
}
button {
  height: 50px;
  width: 150px;
  border-radius: 10px;
  border: 2px solid white;
  color: white;
}
button:hover {
  background-color: white;
  color: black;
}
.account table label {
  font-weight: bold;
}
.account table td {
  width: 25%;
}
.account table input {
  height: 40px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
  color: black;
  animation-name: showInput;
  animation-duration: 2s;
}
@keyframes showInput {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.ch-pass {
  width: 200px;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      editable: false,
      passBtn: false,
      hidePass: false,
      user: {
        address: {
          city: {
            governorate: {
              code: {},
            },
          },
        },
      },
    };
  },
  methods: {
    loadUser() {
      axios
        .get(`https://6905-156-209-44-45.eu.ngrok.io/users/profile`, {
          headers: {
            Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
            "Access-Control-Allow-Origin": "*",
            "ngrok-skip-browser-warning": "11",
          },
        })
        .then((response) => {
          this.user = response.data[0];
          console.log(this.user);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editUser() {
      axios
        .patch(
          `https://6905-156-209-44-45.eu.ngrok.io/users/profile${this.user.id}/`,
          this.user,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
              "Access-Control-Allow-Origin": "*",
              "ngrok-skip-browser-warning": "11",
            },
          }
        )
        .then((response) => {
          this.editable = false;
          this.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.loadUser();
  },
};
</script>
