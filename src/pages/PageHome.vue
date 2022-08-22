<template>
  <div class="PageHome">
    <Submenu></Submenu>
    <div class="content">
      <transition name="move" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <img class="fullscreenImg" src="@/assets/img/全屏_o.png" @click="toggle">
  </div>
</template>

<script>
import Submenu from '@/components/Submenu/Submenu.vue';
import { api as fullscreen } from 'vue-fullscreen'

export default {
  name: 'PageHome',
  components: {
    Submenu
  },
  mixins: [],
  data() {
    return {
      fullscreen: false,
      teleport: true,
    }
  },
  created() { },
  mounted() { },
  methods: {
    async toggle() {
      await fullscreen.toggle(this.$el.querySelector('.content'), {
        teleport: this.teleport,
      })
      this.fullscreen = fullscreen.isFullscreen
    },
  }
}
</script>

<style scoped lang='scss'>
.PageHome {
  width: 100%;
  height: 100%;
  display: flex;
}

.Submenu {
  height: 100%;
}

.content {
  width: 100%;
  overflow-y: auto;
  position: relative;
}

.fullscreenImg {
  width: 64px;
  height: 64px;
  right: 20px;
  top: 10px;
  position: absolute;
  border-radius: 10px;
}

.fullscreenImg:hover {
  background-color: #b9b9b9;
}
</style>