import Vue from 'vue'
import Router from 'vue-router'
import EmailList from '@/components/EmailList'
import Tools from '@/components/Tools'
import ReadEmail from '@/components/ReadEmail'
import ToolsButtons from '@/components/ToolsButtons'
import TwitterStatistics from '@/components/TwitterStatistics'
import RealtimeTweets from '@/components/RealtimeTweets'

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
      component: Tools,
      children: [
        {
          path: '',
          component: ToolsButtons
        },
        {
          path: 'statistics',
          component: TwitterStatistics
        },
        {
          path: 'realtimetweets',
          component: RealtimeTweets
        }
      ]
    },
    {
      path: '/reademail/:from/:address/:subject?/:message/:date/:class',
      component: ReadEmail
    }
  ],
  mode: 'history'
})
