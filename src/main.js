import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import naive from "./plugins/naive";
import "@/permission";
import "@/assets/style/utils.scss";
import "normalize.css";
import "@/theme-chalk/src/index.scss";

createApp(App).use(naive).use(store).use(router).mount("#app");
