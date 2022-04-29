import Home from './views/Home.vue'
import About from './views/About.vue'
import Course from './views/Course.vue'
import Contact from './views/Contact.vue'
import Staff from './views/Staff.vue'
import Documents from './views/Documents.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/course', component: Course, meta: { title: 'Course' } },
  { path: '/staff', component: Staff, meta: { title: 'Staff' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact' } },
  { path: '/documents', component: Documents, meta: { title: 'Documents' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
