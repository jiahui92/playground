<template>
  <div>
    1111
    <MyComponent class="haha" :data1="haha" />
    1111
  </div>
</template>

<script>
export default {
  data () {
    return {
      haha: 1
    }
  }
}
</script>

<style scoped>
.haha {
  background: red;
}
</style>