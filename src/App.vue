<template>
  <div id="app">

    <router-link tag="mybtn" to="/list" type="primary" size="large">List</router-link>
    <router-link tag="mybtn" to="/pages" type="primary" size="large">pages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
    }
  },
  components: {
  }
}
</script>

<style>
  #app{
    width:100%;
    height:100%;
  }
</style>
