import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import firebase from 'firebase/app'

VTTCue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyBoXPPF6n9EE0qR0JcOd8WLrAxm1l3_qPw",
  authDomain: "vue-calendar-6454b.firebaseapp.com",
  databaseURL: "https://vue-calendar-6454b.firebaseio.com",
  projectId: "vue-calendar-6454b",
  storageBucket: "vue-calendar-6454b.appspot.com",
  messagingSenderId: "263323868854",
  appId: "1:263323868854:web:cabfb0a075160acc9f1017"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if (!app) {
    app =
      createApp(App)
        .use(store)
        .use(router)
        .mount("#app");

  }
})

