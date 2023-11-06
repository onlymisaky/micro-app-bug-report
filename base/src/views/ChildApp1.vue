<template>
  <micro-app name="about"
    :url='url'
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
  data() {
    return {
      url: process.env.VUE_APP_CHILD_APP_URL,
    }
  },
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
