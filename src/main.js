import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from 'vue-router'

import Home from './components/Home.vue'
const About = { template: '<div>About this app</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home,  meta: { transition: 'slide-right' } },
  { path: '/about', component: About,  meta: { transition: 'slide-left' } },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history:  createWebHashHistory(),
  routes, // short for `routes: routes`
})
createApp(App).use(router).mount('#app')