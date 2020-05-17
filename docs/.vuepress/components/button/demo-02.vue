<template>
  <div>
    <w-button loading @click="handleClick" type="success">自动loading</w-button>
    <w-button fullscreen-loading @click="handleClick" type="warning">全屏loading</w-button>
  </div>
</template>

<script>
export default {
  name: 'button-demo-02',
  data() {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    handleClick(done) {
      setTimeout(() => {
        // do something
        done()
      }, 1000)
    }
  }
}
</script>
