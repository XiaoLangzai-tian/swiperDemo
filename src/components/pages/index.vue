<template>
  <div id="box">
    <Swiper :title="message" idname='code'>

     <template v-for="item in message" :slot="item.code">
         <img :src="item.name" alt="" :key="item.code">
        </template>

    </Swiper>
  </div>
</template>

<script>
import Swiper from '../swiper'
export default {
  name: 'box',
  data(){
    return {
      message:[
            {code:'s1',name:'https://static.maizuo.com/v5/upload/a065abe367c5e0920875f730d3adfc54.jpg?x-oss-process=image/quality,Q_70'},
            {code:'s2',name:'https://static.maizuo.com/v5/upload/15ec8fffe58a7275380ff7c2937deca2.jpg?x-oss-process=image/quality,Q_70'},
            {code:'s3',name:'https://static.maizuo.com/v5/upload/13648b1f3e9255a97a96cd6718ea844a.jpg?x-oss-process=image/quality,Q_70'},
            {code:'s4',name:'https://static.maizuo.com/v5/upload/36e09fb0bde998300903adb62682ad2f.jpg?x-oss-process=image/quality,Q_70'}
        ]
    }
  },
  components: {
    Swiper,
  }
}
</script>

<style>
  #box{
    width:100%;
    height:100%;
  }
</style>
