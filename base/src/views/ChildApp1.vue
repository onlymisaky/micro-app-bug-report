<template>
  <micro-app name="about"
    url="http://127.0.0.1:4322/"
    @created='created'
    @beforemount='beforemount'
    @mounted='mounted'
    @unmount='unmount'
    @error='error'>
  </micro-app>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    created() {
      console.log('micro-app元素被创建');
    },
    beforemount() {
      console.log('即将被渲染');
    },
    mounted() {
      console.log('已经渲染完成');
    },
    unmount() {
      console.log('已经卸载');
    },
    error() {
      console.log('渲染出错');
    },
  },
};
</script>
