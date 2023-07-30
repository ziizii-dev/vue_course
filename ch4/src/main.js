import "./assets/main.css";
import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";

import ByeWorld from "./components/ByeWorld.vue";
import HelloWorld from "./components/HelloWorld.vue";

// createApp(App).mount("#app");

const app = createApp(App);

app.component("ByeWorld", ByeWorld);
app.component("HelloWorld", HelloWorld);
app.mount("#app");
