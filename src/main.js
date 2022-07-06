import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/plugins/fontawsome";
import router from './router';

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

  