<template>
     <Mainnavbar/>
     <Getintouch/>
     <footermain/>

</template>

<script>

import footermain from '../footer/footermain.vue' 
import Getintouch from '/src/components/contact/getintouch.vue'
import Mainnavbar from '/src/components/homepage/navbar.vue'
export default {
  name: 'Contact',
  components:{
    Mainnavbar,
    Getintouch,
     footermain
  }
}
</script>

<style>

</style>