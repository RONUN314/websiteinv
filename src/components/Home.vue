<template>
  <div>
   <Mainnavbar/>
   <Maincarousel/>
   <Whatwedo/>
   <Newsmain/>
   <footermain/>
   
   
  </div>
</template>

<script>

import Mainnavbar from './homepage/navbar.vue'
import Maincarousel from './homepage/carousel.vue'
import Whatwedo from './homepage/whatwedo.vue'
import Newsmain from './homepage/news.vue'
import footermain from './footer/footermain.vue'


 export default {
    name:'Home',
    components:{
    Mainnavbar,
    Maincarousel,
    Whatwedo,
    Newsmain,
    footermain
}
 }
</script>

<style>

</style>