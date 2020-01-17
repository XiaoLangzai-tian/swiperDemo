<template>
   <div class="swiper-container">
            <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in title" :key="index">
                        <slot :name="item[idname]"></slot>
                    </div>
            </div>
            <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'; 
export default {
    name:'swiper',
    props:['title','idname'],
    mounted() {
        var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
        });
    },
}
</script>
<style >
    .swiper-container img{
        width:100%;
        height:auto;
    }
    .swiper-container{
        max-width:100%;
        height:auto;
        max-height:449px;
    }
    .swiper-pagination{
        display:flex;
        justify-content: flex-end;
    }
    .swiper-pagination-bullet-active{
        background:#fff;
    }
</style>