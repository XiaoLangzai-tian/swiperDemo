<template>
    <div>
        <ul>
            <li v-for="item in message" :key="item.code">
                <img v-lazy="item.name">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'list',
    data(){
        return {
            message:[
                {code:'s1',name:'https://static.maizuo.com/v5/upload/a065abe367c5e0920875f730d3adfc54.jpg?x-oss-process=image/quality,Q_70'},
                {code:'s2',name:'https://static.maizuo.com/v5/upload/15ec8fffe58a7275380ff7c2937deca2.jpg?x-oss-process=image/quality,Q_70'},
                {code:'s3',name:'https://static.maizuo.com/v5/upload/13648b1f3e9255a97a96cd6718ea844a.jpg?x-oss-process=image/quality,Q_70'},
                {code:'s4',name:'https://static.maizuo.com/v5/upload/36e09fb0bde998300903adb62682ad2f.jpg?x-oss-process=image/quality,Q_70'}
            ]
        }
    }
}
</script>
<style>
    ul li img{
        width:100%;
        height:600px;
    }
</style>