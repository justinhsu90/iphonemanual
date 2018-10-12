<template>
    <div id="app">
        <div>
        <section style="line-height:68px;padding-left:20px;">
            <h1 style="color:white;display:inline-block;">Apple phone screen change instructions</h1>       
        </section>
        <directiveNav select="/"></directiveNav>
     </div>   
        <div class="container">
            <div class="container-header"></div>
            <iphone6></iphone6>
        </div>
        <!-- <footer>Footer</footer> -->
    </div>
</template>
<script>
import iphone6 from '@/components/iphone6';
import directiveNav from '@/common/nav'
 export default {
    components:{
        iphone6,
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
