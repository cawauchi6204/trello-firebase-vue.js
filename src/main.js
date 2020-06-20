import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import firebase from "firebase"
import './assets/css/styles.css'

var firebaseConfig = {
  apiKey: "AIzaSyA1SfNh6lRMo_aSOL7yaiNuCi2ZnTuCUS0",
  authDomain: "trello-firebase-62ea1.firebaseapp.com",
  databaseURL: "https://trello-firebase-62ea1.firebaseio.com",
  projectId: "trello-firebase-62ea1",
  storageBucket: "trello-firebase-62ea1.appspot.com",
  messagingSenderId: "693675686789",
  appId: "1:693675686789:web:2aa15e9adc39cf506ba2ec",
  measurementId: "G-CC75YSPST2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
