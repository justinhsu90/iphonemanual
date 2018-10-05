<template>
    <nav>
        <el-popover>
            <div>
               <div id="google_translate_element"></div>
            </div>
              <el-button slot="reference"  size="small">Switch language</el-button>  
        </el-popover>
        
        <el-select  style="margin-left:10px;" size="small" v-model="select" @change="handlSelect">
            <el-option v-for="(v,i) in selectOption" :label="v.label" :value="v.value" :key="i"></el-option>
        </el-select>
    </nav>
</template>
<script>
export default {
    props:['select'],
    data(){
        return{
            selectOption:[{
                label:'iphone6s',
                value:'/'
            },
            {
                label:'iphone6',
                value:'/iphone6'
            },
            {
                label:'iphone6p',
                value:'/iphone6p'
            },
            {
                label:'iphone6sp',
                value:'/iphone6sp'
            },
            {
                label:'iphone7p',
                value:'/iphone7p'
            },
            {
                label:'iphone8',
                value:'/iphone8'
            },
            {
                label:'iphone8p',
                value:'/iphone8p'
            },
            {
                label:'iphonese',
                value:'/iphonese'
            },
            {
                label:'iphoneX',
                value:'/iphoneX'
            },
            ]
        }
    },
    methods:{
        handlSelect(v){
            if(v == '/' ){
                 window.location.href = `/`;
          }else{
               window.location.href = `${v}.html`;
          }
        }
    }
}
</script>
<style lang="scss">
nav {
    background: #f5f5f5;
    border-bottom: 1px solid #e1e1e2;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
}
.goog-te-banner-frame{
    display: none !important;
}
body{
    top:0px !important;
}
</style>

