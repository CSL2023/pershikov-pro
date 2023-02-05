import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
import 'swiper/css'
import { createI18n } from 'vue-i18n'
import { languages } from './locales'
import { defaultLocale } from './locales'

const messages = Object.assign(languages)
const routeLocale = window.location.hash.slice(1).toString()
const i18n = createI18n({
	locale: routeLocale || localStorage.getItem('defaultLocale') || defaultLocale,
	fallbackLocale: 'ru',
	messages,
})

createApp(App)
	.use(i18n)
	.mount('#app')
