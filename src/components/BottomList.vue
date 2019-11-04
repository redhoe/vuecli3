<template>
    <div class="BottomList">
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading left">{{ pageName }}:{{defaultData.countNum}}</div>
            <div class="list-group-item leftlink" @click="AddClick">Click add Count</div>
            <div class="panel-body">
                <SearchList/>
            </div>
            <!-- Table -->
            <div class="row">
                <div class="col-md-6">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>买方委托价</th>
                            <th>委托数量</th>
                            <th>累计委托量</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(buyPrice, salePrice) in (buyList)">
                            <td>{{buyPrice[0]}}</td>
                            <td>{{buyPrice[1]}}</td>
                            <td>{{buyPrice[2]}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>卖方委托价</th>
                            <th>委托数量</th>
                            <th>累计委托量</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="salePrice in saleList">
                            <td>{{salePrice[0]}}</td>
                            <td>{{salePrice[1]}}</td>
                            <td>{{salePrice[2]}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchList from '@/components/SearchList.vue'
    import EventBus from './msg.js'

    export default {
        name: "BottomList",
        components: {
            SearchList
        },
        props: ["defaultData"],
        data() {
            var _this = this;
            var url = "json/data.json";
            this.$axios.get('/web/1_0_0/getDepthData?market=btc_usdt').then(function(val){
                console.log(val) // axios会对我们请求来的结果进行再一次的封装（ 让安全性提高 ）
            }).catch(function(err){
                console.log(err)
            });

            this.$axios.get(url).then(function (res) {
                _this.buyList = res.data.data.asks;
                _this.saleList = res.data.data.bids;
                // console.log(res.data.data.asks);
            });
            return {
                pageName: "DefautlPage",
                buyList: [],
                saleList: []
            }
        },
        methods: {
            AddClick() {
                // console.log(this.$parent.$data.defaultData.countNum);
                this.$parent.$data.defaultData.countNum++

            }
        },
        // 方法函数
        mounted() {
            var _this = this;
            // 接收事件总线传值 用回调函数处理
            EventBus.$on('pageName', function (m) {
                _this.pageName = m;
            });
        }


    }
</script>

<style scoped>
    .left {
        /*float: left;*/
        text-align: left;
    }

    .leftlink {
        cursor: pointer;
    }

</style>