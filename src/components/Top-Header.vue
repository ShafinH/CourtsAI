<template> 
  <div class="nav"> 

    <img :src="require('@/assets/Logo.png')" class="home-logo"/>

    <router-link to="/"><div class="nav-item1">Home</div></router-link>

    <router-link to="/deception"><div class="nav-item2">Deception</div></router-link>

    <router-link to="/bail"><div class="nav-item3">Bail</div></router-link>
    <router-link to="/sentence"><div class="nav-item4">Sentencing</div></router-link>


    <button v-if="loggedIn" class="btn text-white sign" @click="signOut">
          Sign Out
        </button>
        <button v-else class="btn text-white signout" type="button" @click="oneOrTwo">
          <router-link class="text-white" to="/login" v-if="loginOrRegister == true"
            >Sign In / Register</router-link
          >
          <router-link v-else class="text-white" to="/register"
            >Sign In / Register</router-link
          >
      </button>

  </div>
 
</template>
    
<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        this.username = user.email;
      } else {
        this.loggedIn = false;
        this.username = "";
      }
    });
  },
  data() {
    return {
      loggedIn: false,
      username: "",
      loginOrRegister: true,
    };
  },

  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "Login" });
      } catch (err) {
        console.log(err.message);
      }
    },
    oneOrTwo() {
      if (this.loginOrRegister == false) {
        this.loginOrRegister = true;
      } else {
        this.loginOrRegister = false;
      }
    },
  },
};
</script>

<style  scoped>
/*
* {
  font-family: "Poppins", sans-serif;
} */
.nav a.router-link-exact-active {
  color: #000000;
}

.btn {
  background: #3273D3;
  position: absolute;
  left: 1360px;
  top: 63px;
  font-size: 18px;
}
.btn:hover {
  background: #165094;
} 
#router-link {
  text-decoration: none;
}
.nav {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 43px;
  color: #000000;
}
.nav-item1{
  position: absolute;
  width: 109px;
  height: 43px;
  left: 146px;
  top: 54px;

}
.nav-item2{
  position: absolute;
  width: 184px;
  height: 43px;
  left: 295px;
  top: 54px;
}
.nav-item3{
  position: absolute;
  width: 66px;
  height: 43px;
  left: 518px;
  top: 54px;
}
.nav-item4{
  position: absolute;
  width: 202px;
  height: 43px;
  left: 629px;
  top: 54px;
}
.home-logo{
  position: absolute;
  left: 93%;
  top: 4%;
  width: 85px;
  height: auto;
}
.sign{
  margin-left: -50px;
}
.signout{
  margin-left: -150px;
}
</style>