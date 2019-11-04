<template>
    <div class="left">

        <div class="list-group">
            <img src="m.png" alt="">
            <div class="list-group-item disabled leftlink">Data From parent：{{defaultData.auther}}</div>
            <a href="#" class="list-group-item disabled">
                Knowledge->{{pageName}}
            </a>
            <div class="list-group-item leftlink" @click="PythonClick">Python</div>
            <div class="list-group-item leftlink" @click="PhpClick">Php</div>
            <div class="list-group-item leftlink" @click="JavaScriptClick">JavaScript</div>
            <div class="list-group-item leftlink" @click="VueClick">Vue</div>
            <div class="list-group-item leftlink" @click="BootstrapClick">Bootstrap</div>
        </div>
    </div>
</template>

<script>
    import EventBus  from './msg.js'
    export default {
        name: "Left",
        props: ["defaultData"],
        data(){
            return{
                pageName:'DefaultPage'
            }

        },
        methods:{
            PythonClick(){
                this.pageName = 'PythonPage';
                // 传参数pageName
                EventBus.$emit('pageName', this.pageName);
            },
            PhpClick(){
                this.pageName = 'PhpPage';
                // 传参数pageName
                EventBus.$emit('pageName', this.pageName);
            },
            JavaScriptClick(){
                this.pageName = 'JavaScript';
                // 传参数pageName
                EventBus.$emit('pageName', this.pageName);
            },
            VueClick(){
                this.pageName = 'VueClickPage';
                // 传参数pageName
                EventBus.$emit('pageName', this.pageName);
            },
            BootstrapClick(){
                this.pageName = 'BootstrapPage';
                // 传参数pageName
                EventBus.$emit('pageName', this.pageName);
            }
        }
    }
</script>

<style scoped>
    .left{

    }
    .leftlink{
        cursor: pointer;
    }
    img{
        margin: 3px;
    }
</style>