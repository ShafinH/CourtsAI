<template>
  <div id="app">
    <Top-Header /> 
    <br />
    <div style="padding-bottom: 150px;"></div>
    <router-view style=""/>
  </div>
</template>

<script>
import TopHeader from "./components/Top-Header";

export default {
  data() {
    return {
      username: "",
    };
  },
  components: {
    TopHeader,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
