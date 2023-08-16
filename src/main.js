import i18n from './i18n'
import 'normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/icon/iconfont.css'

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        // When the tab becomes visible, change the title
        document.title = "Welcome back!";
        setTimeout(() => {
            document.title = "Haopeng's Portofolio";
        }, 2000);
    } else {
        // When the tab becomes hidden, change the title
        document.title = "(T⌓T) Come back pls!";
    }
});

createApp(App).use(i18n).mount('#app')
