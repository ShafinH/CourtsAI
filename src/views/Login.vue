<template>
  <div style="margin-top: 5%">
    <div v-if="error" class="erorr">
      {{ error.message }}
    </div>
    <form @submit.prevent="pressed">
      <div class="">
        <h2>Login</h2>
        <input type="email" placeholder="email" v-model="email" required />
      </div>
      <div class="password">
        <input
          type="password"
          placeholder="password"
          v-model="password"
          required
        />
      </div>
      <button class="btn text-white" type="submit">Login</button>
      <div class="error" v-if="error">{{ error.message }}</div>
      <br />
      <span
        >Need an account? Click here to
        <router-link to="/register">register</router-link></span
      >
    </form>
  </div>
</template>
    
<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    async pressed() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "Deception" });
      } catch (err) {
        console.log(err.message);
        alert(err.message);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 18px;
}
.btn {
  width: 200px;
  height: 55px;
  font-size: 100%;
  margin-bottom: 10px;
  background: #3273D3;
}
.btn:hover {
  background: #165094;
}
</style>