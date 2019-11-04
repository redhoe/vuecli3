<template>
    <div class="BannerPath">
        <div class="page-header left">
            <h1>知识猎场 <small>{{pageName}}</small></h1>
        </div>
    </div>
</template>

<script>
    import EventBus from './msg.js'
    export default {
        data(){
            return{
                pageName:'Hello'
            }
        },
        name: "BannerPath",
        mounted(){
            var _this = this;
            // 接收事件总线传值 用回调函数处理
            EventBus.$on('pageName', function (m) {
                _this.pageName = m;
            });
        }

    }
</script>

<style scoped>
    .left{
        /*float: left;*/
        text-align: left;
    }

</style>