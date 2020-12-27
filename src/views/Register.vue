<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div style="margin-top: 5%">
    <div v-if="error" class="erorr">
      {{ error.message }}
    </div>
    <form @submit.prevent="pressed">
      <h2>Register</h2>
      <div class="email">
        <input type="email" v-model="email" placeholder="email" required />
      </div>
      <div class="passoword">
        <input
          type="password"
          v-model="password"
          placeholder="password (at least 6 characters)"
          required
        />
      </div>
      <button class="btn text-white" type="submit">Register</button>
      <br />
      <span
        >Already have an account? Click here to
        <router-link to="/login">login</router-link></span
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
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "Diagnose" });
        console.log(user);
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

