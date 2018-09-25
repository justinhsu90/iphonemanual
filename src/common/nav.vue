<template>
    <nav>
        <el-select v-model="select" @change="handlSelect">
            <el-option v-for="(v,i) in selectOption" :label="v.label" :value="v.value" :key="i"></el-option>
        </el-select>
    </nav>
</template>
<script>
export default {
    data(){

        return{
            select:'/',
            selectOption:[{
                label:'iphone6',
                value:'/'
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
            window.location.href = `${v}.html`;
        }
    }
}
</script>
<style lang="scss">
nav {
    background: #f5f5f5;
    border-bottom: 1px solid #e1e1e2;
    height: 45px;
}
</style>

