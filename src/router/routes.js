const routes = [
  {
    path: '/',
    component: () => import('layouts/FrontLayout.vue'),
    meta: { title: '317 林邊故事鄉' },
    children: [
      // 首頁-------------------------------->
      {
        path: '/',
        component: () => import('pages/front/Index.vue'),
        meta: { title: '317 林邊故事鄉' }
      },
      // 最新消息-------------------------------->
      {
        path: 'news',
        component: () => import('pages/front/News.vue'),
        meta: { title: '317 林邊故事鄉 | 最新消息' }
      },
      // 關於我們_林仔邊協會------------------------>
      {
        path: 'association',
        component: () => import('pages/front/About_association.vue'),
        meta: { title: '317 林邊故事鄉 | 林仔邊協會' }
      },
      // 關於我們_光采農圃的由來
      {
        path: 'farm',
        component: () => import('pages/front/About_farm.vue'),
        meta: { title: '317 林邊故事鄉 | 光采農圃的由來' }
      },
      // 感動旅行_活動體驗--------------------------->
      {
        path: 'experience',
        component: () => import('pages/front/Activity_experience.vue'),
        meta: { title: '317 林邊故事鄉 | 活動體驗' }
      },
      // 感動旅行_環境教育
      {
        path: 'education',
        component: () => import('pages/front/Activity_education.vue'),
        meta: { title: '317 林邊故事鄉 | 環境教育' }
      },
      // 感動旅行_低碳廚房
      {
        path: 'kitchen',
        component: () => import('pages/front/Activity_kitchen.vue'),
        meta: { title: '317 林邊故事鄉 | 低碳廚房' }
      },
      // 林邊好物-------------------------------------->
      {
        path: 'souvenir',
        component: () => import('pages/front/Souvenir.vue'),
        meta: { title: '317 林邊故事鄉 | 林邊好物' }
      },
      // 在地資訊_用餐小吃------------------------------->
      {
        path: 'eat',
        component: () => import('pages/front/Info_eat.vue'),
        meta: { title: '317 林邊故事鄉 | 用餐小吃' }
      },
      // 在地資訊_散步逗留
      {
        path: 'wander',
        component: () => import('pages/front/Info_wander.vue'),
        meta: { title: '317 林邊故事鄉 | 散步逗留' }
      },
      // 在地資訊_住宿林邊
      {
        path: 'live',
        component: () => import('pages/front/Info_live.vue'),
        meta: { title: '317 林邊故事鄉 | 住宿林邊' }
      },
      // 在地資訊_交通指南
      {
        path: 'traffic',
        component: () => import('pages/front/Info_traffic.vue'),
        meta: { title: '317 林邊故事鄉 | 交通指南' }
      },
      // 在地資訊_故事人文
      {
        path: 'story',
        component: () => import('pages/front/Info_story.vue'),
        meta: { title: '317 林邊故事鄉 | 故事人文' }
      },
      // FAQ----------------------------------->
      {
        path: 'faq',
        component: () => import('pages/front/Faq.vue'),
        meta: { title: '317 林邊故事鄉 | FAQ' }
      },
      // 註冊---------------------------------->
      {
        path: 'register',
        component: () => import('pages/front/Register.vue'),
        meta: { title: '317 林邊故事鄉 | 註冊' }
      },
      // 登入---------------------------------->
      {
        path: 'login',
        component: () => import('pages/front/Login.vue'),
        meta: { title: '317 林邊故事鄉 | 登入' }
      },
      // 購物車---------------------------------->
      {
        path: 'cart',
        component: () => import('pages/front/Cart.vue'),
        meta: {
          login: true,
          title: '317 林邊故事鄉 | 購物車'
        }
      },
      // 管理---------------------------------->
      {
        path: 'admin',
        component: () => import('pages/back/Admin.vue'),
        meta: {
          login: true,
          admin: true,
          title: '317 林邊故事鄉 | 管理'
        },
        children: [
          {
            path: '/admin_index',
            name: 'Admin_index',
            component: () => import('pages/back/Admin_index.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          },
          {
            path: '/admin_news',
            name: 'Admin_news',
            component: () => import('pages/back/Admin_news.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          },
          {
            path: '/admin_about',
            name: 'Admin_about',
            component: () => import('pages/back/Admin_about.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          },
          {
            path: '/admin_activity',
            name: 'Admin_activity',
            component: () => import('pages/back/Admin_activity.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          },
          {
            path: '/admin_souvenir',
            name: 'Admin_souvenir',
            component: () => import('pages/back/Admin_souvenir.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          },
          {
            path: '/admin_info',
            name: 'Admin_info',
            component: () => import('pages/back/Admin_info.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          },
          {
            path: '/admin_faq',
            name: 'Admin_faq',
            component: () => import('pages/back/Admin_faq.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          },
          {
            path: '/admin_member',
            name: 'Admin_member',
            component: () => import('pages/back/Admin_member.vue'),
            meta: {
              login: true,
              admin: true,
              title: '317 林邊故事鄉 | 管理'
            }
          }
        ]
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
