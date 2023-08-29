import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(VueSweetalert2);
});
