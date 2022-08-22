import { createRouter , createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/about/about.vue'
import Contact from '/src/components/Contact/Contact.vue'
import News from '/src/components/News/New.vue'

const routes =[

   {path: '/',
   name: 'Home',
   component: Home,}
   ,
   {
    path: '/about',
    name: 'About',
    component: About,
   },
   {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
   },
   {
    path: '/News',
    name: 'News',
    component: News,
   }

]

const router = createRouter ({
    history: createWebHistory(),

    routes, 
})

export default router