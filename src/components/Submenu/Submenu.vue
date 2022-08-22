<template>
  <div class="submenu">
    <el-menu default-active="1111111111" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
      router>
      <el-menu-item :key="item.index" v-for="item in submenuList" :index="item.index">
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'PageHome',
  components: {},
  mixins: [],
  data() {
    return {
      submenuList: [
        {
          title: '页面1',
          index: 'PageOne',
        },
        {
          title: '页面2',
          index: 'PageTwo',
        }
      ]
    }
  },
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style scoped lang='scss'>
.submenu {
  width: 150px;
  height: 100%;
  background-color: #545c64;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
}
</style>