<template>
  <div class="ui-list">
    <group v-for="(group, index) in groups"
           :title="group.title"
           :key="'group'+index">
      <cell v-for="(cell,index) in group.list"
            is-link
            :title="cell.title"
            :link="cell.link"
            :key="'cell'+index">
        <span class="icon iconfont icon-left"
              :class="cell.icon"
              slot="icon"></span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'UIList',
  components: {
    Group,
    Cell
  },
  data () {
    return {
      groups: [
        {
          title: '登录类',
          list: [
            {
              title: 'APP登录组件',
              icon: 'icon-gerenzhongxin',
              link: { path: '/demos/login-app' }
            },
            {
              title: '微信登录组件',
              icon: 'icon-bussinessman',
              link: { path: '/demos/login-cell' }
            }
          ]
        },
        {
          title: '列表类',
          list: [
            {
              title: '图文列表',
              icon: 'icon-viewlist',
              link: { path: '/demos/cell-list' }
            },
            {
              title: '图文列表带复选',
              icon: 'icon-success',
              link: { path: '/demos/checkbox-list' }
            },
            {
              title: '纯文字带按钮列表',
              icon: 'icon-category',
              link: { path: '/demos/cell-btn' }
            }
          ]
        },
        {
          title: '表单类',
          list: [
            {
              title: '分组表单输入',
              icon: 'icon-survey1',
              link: { path: '/demos/form-group' }
            },
            {
              title: '未分组表单输入',
              icon: 'icon-survey',
              link: { path: '/demos/form-single' }
            },
            {
              title: '表单详情-不带选项卡',
              icon: 'icon-text',
              link: { path: '/demos/form-detail-cell' }
            },
            {
              title: '表单详情-带选项卡',
              icon: 'icon-calendar',
              link: { path: '/demos/form-detail' }
            }
          ]
        },
        {
          title: '菜单类',
          list: [
            {
              title: '菜单导航',
              icon: 'icon-shuffling-banner',
              link: { path: '/demos/tabbar' }
            },
            {
              title: '搜索',
              icon: 'icon-search',
              link: { path: '/demos/search' }
            }
          ]
        },
        {
          title: '综合类',
          list: [
            {
              title: '个人中心',
              icon: 'icon-smile',
              link: { path: '/demos/about-me' }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.icon-left {
  display: inline-block;
  min-width: 16px;
  font-size: 24px;
  margin-right: 15px;
}
</style>
