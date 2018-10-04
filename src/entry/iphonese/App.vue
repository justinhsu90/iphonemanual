<template>
    <div id="app">
        <div>
        <section></section>
        <directiveNav select="/iphonese"></directiveNav>
     </div>   
        <div class="container">
            <div class="container-header"></div>
            <iphonese></iphonese>
        </div>
        <footer>Footer</footer>
    </div>
</template>
<script>
import iphonese from '@/components/iphonese';
import directiveNav from '@/common/nav'
export default {
    components:{
        iphonese,
        directiveNav
    }
}
</script>
<style lang="scss" type="text/scss">
@import "../../assets/scss/reset.scss";
section {
    height: 68px; 
    background-color: #212426;
}
nav {
    background: #f5f5f5;
    border-bottom: 1px solid #e1e1e2;
    height: 45px;
}
.container {
    background: red;
    margin: 0 auto;
    width: 981px;
    background: linear-gradient(to bottom, #eee 0, #fff 900px) no-repeat;
}
.container-header {
    height: 50px;
    width: 961px;
    background: rgba(244, 244, 244, 0.62);
    margin: 0 auto;
}
footer{
    height: 600px;
    background-color: rgba(36,39,42,.06);
    padding-top: 20px;
    font-size: 15px;
}
</style>
