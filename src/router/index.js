import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Profile = () => import('@/views/Profile')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Views - Battle
const BattleSettings = () => import('@/views/battle/BattleSettings')
const BattleSchedule = () => import('@/views/battle/BattleSchedule')
const BattleAssets = () => import('@/views/battle/BattleAssets')
const BattleMembers = () => import('@/views/battle/BattleMembers')
const BattleLoansList = () => import('@/views/battle/BattleLoansList')
const BattleLoansNewest = () => import('@/views/battle/BattleLoansNewest')
const BattleLoansFavorite = () => import('@/views/battle/BattleLoansFavorite')

// Views - VK
const Tasks = () => import('@/views/vk/Tasks')
const AssignedTasks = () => import('@/views/vk/UserTasks')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Главная',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'battle',
          redirect: '/battle/settings',
          name: 'Убиваю BPM Battle',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'loans',
              name: 'Заявки',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'all',
                  name: 'Все заявки',
                  component: BattleLoansList
                },
                {
                  path: 'newest',
                  name: 'Актуальные',
                  component: BattleLoansNewest
                },
                {
                  path: 'favorite',
                  name: 'Избранные',
                  component: BattleLoansFavorite
                }
              ]
            },
            {
              path: 'members',
              name: 'Участники',
              component: BattleMembers
            },
            {
              path: 'assets',
              name: 'Документы',
              component: BattleAssets
            },
            {
              path: 'schedule',
              name: 'Календарь',
              component: BattleSchedule
            },
            {
              path: 'settings',
              name: 'Настройки',
              component: BattleSettings
            }
          ]
        },
        {
          path: 'profile',
          name: 'Профиль',
          component: Profile
        },
        {
          path: 'vk',
          name: 'Текущие задачи',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'tickets',
              component: Tasks
            },
            {
              path: 'tasks',
              component: AssignedTasks
            }
          ]
        }
      ]
    },
    {
      path: '/auth',
      name: 'User',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
