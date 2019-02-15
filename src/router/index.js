import Vue from 'vue'
import Router from 'vue-router'
import EmailList from '@/components/EmailList'
import Tools from '@/components/Tools'
import ReadEmail from '@/components/ReadEmail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: EmailList
    },
    {
      path: '/negativeemails',
      component: EmailList
    },
    {
      path: '/positiveemails',
      component: EmailList
    },
    {
      path: '/neutralemails',
      component: EmailList
    },
    {
      path: '/tools',
      component: Tools
    },
    {
      path: '/reademail/:from/:address/:subject?/:message/:date/:class',
      component: ReadEmail
    }
  ],
  mode: 'history'
})
