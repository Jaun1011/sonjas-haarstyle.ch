import Vue from 'vue'
import Router from 'vue-router'

import Dienstleistung from '@/components/article/Dienstleistung'
import Preise from '@/components/article/Preise'
import Produkte from '@/components/article/Produkte'
import Galerie from '@/components/article/Galerie'
import Home from '@/components/article/Home'
import News from '@/components/article/News'
import Team from '@/components/article/Team'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',component: Home},
    {path: '/dienstleistung',component: Dienstleistung},
    {path: '/preise',component: Preise},
    {path: '/produkte',component: Produkte},
    {path: '/galerie',component: Galerie},
    {path: '/team',component: Team},
    {path: '/news',component: News},
  ]
})
