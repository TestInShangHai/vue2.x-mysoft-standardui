import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '@/components/AboutMe'
import Login from '@/components/Login'
import List from '@/components/UIList'
import Tabbar from '@/components/Tabbar'
import LoginCell from '@/components/LoginCell'
import CellList from '@/components/CellList'
import CheckboxList from '@/components/CheckboxList'
import CellBtn from '@/components/CellBtn'
import FormDetail from '@/components/FormDetail'
import FormDetailCell from '@/components/FormDetailCell'
import FormGroup from '@/components/FormGroup'
import FormSingle from '@/components/FormSingle'
import Search from '@/components/Search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List,
      meta: {
        title: '组件列表'
      }
    },
    {
      path: '/demos/login-cell',
      name: 'login-cell',
      component: LoginCell,
      meta: {
        title: '微信登录组件'
      }
    },
    {
      path: '/demos/login-app',
      name: 'login-app',
      component: Login,
      meta: {
        title: 'APP登录组件'
      }
    },
    {
      path: '/demos/cell-list',
      name: 'cell-list',
      component: CellList,
      meta: {
        title: '图文列表'
      }
    },
    {
      path: '/demos/checkbox-list',
      name: 'checkbox-list',
      component: CheckboxList,
      meta: {
        title: '图文列表带复选'
      }
    },
    {
      path: '/demos/cell-btn',
      name: 'cell-btn',
      component: CellBtn,
      meta: {
        title: '纯文字带按钮列表'
      }
    },
    {
      path: '/demos/form-detail',
      name: 'form-detail',
      component: FormDetail,
      meta: {
        title: '表单详情-带选项卡'
      }
    },
    {
      path: '/demos/form-detail-cell',
      name: 'form-detail-cell',
      component: FormDetailCell,
      meta: {
        title: '表单详情-不带选项卡'
      }
    },
    {
      path: '/demos/form-group',
      name: 'form-group',
      component: FormGroup,
      meta: {
        title: '分组表单输入'
      }
    },
    {
      path: '/demos/form-single',
      name: 'form-single',
      component: FormSingle,
      meta: {
        title: '未分组表单输入'
      }
    },
    {
      path: '/demos/about-me',
      name: 'about-me',
      component: AboutMe,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/demos/tabbar',
      name: 'tabbar',
      component: Tabbar,
      meta: {
        title: '菜单导航'
      }
    },
    {
      path: '/demos/search',
      name: 'search',
      component: Search,
      meta: {
        title: '搜索栏'
      }
    }
  ]
})
