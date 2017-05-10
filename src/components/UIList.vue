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
      groups: []
    }
  },
  methods: {
    loadList () {
      this.$http.get('./mock/uilist.json')
        .then((res) => {
          console.log(res)
          this.groups = res.data.uilist
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  created () {
    this.loadList()
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
