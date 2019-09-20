<template>
  <div class="full-content">
    <router-view/>
    <notifications group="message" position="bottom right"/>
  </div>
</template>

<script>
import { interceptorService } from './interceptor/index'

interceptorService()

export default {
    name: 'App'
}
</script>
<style scoped>
  .full-content {
    width: 100%;
    height: 100%;
  }
</style>