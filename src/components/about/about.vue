<template>
    <div>
        <Mainnavbar />
        <Mainword />
        <Whoarewe/>
        <Ourmission/>
        <Exploremore/>
        <footermain />
    </div>
</template>

<script>
import Mainnavbar from '/src/components/homepage/navbar.vue'
import Mainword from '/src/components/about/mainword.vue'
import Whoarewe from '/src/components/about/whoarewe.vue'
import footermain from '/src/components/footer/footermain.vue'
import Ourmission from './ourmission.vue'
import Exploremore from './exploremore.vue'



export default {
    name: 'About',
    components: {
    Mainnavbar,
    Mainword,
    Whoarewe,
    footermain,
    Ourmission,
    Exploremore
},
}
</script>

<style></style>
