<template>
    <div>
        <div class="mainbody">
            <Navtop/>
            <div class="index">
                <div class="leftdiv">
					<Left/>
				</div>
                <div class="rightdiv">
                    <div class="bannerdiv">
						<BannerPath/>
					</div>
                    <div class="bottomdiv">
						<BottomList></BottomList>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Navtop from '@/components/NavTop.vue'
	import Left from '@/components/Left.vue'
	import BannerPath from '@/components/BannerPath.vue'
	import BottomList from '@/components/BottomList.vue'


    export default {
        name: 'index',
        components: {
            Navtop,
			Left,
			BannerPath,
			BottomList
        }
    }
</script>

<style scoped>
    * {
        margin: auto;
        padding: 0;
    }

    .index {
        width: 90%;
        margin: 0 auto;
        background-color: azure;
		margin-top: 50px;
    }

    .leftdiv {
        width: 15%;
        height: 800px;
        float: left;
		margin-left: 10px;
        /*background-color: antiquewhite;*/
    }

    .rightdiv {
        width: 80%;
        height: 800px;
		float: left;
		margin-left: 10px;
        /*background-color: #2c3e50;*/
    }

    .bannerdiv {
        width: 100%;
        /*background-color: darkred;*/

    }

    .bottomdiv {
		width: 100%;
		margin-top: 2px;
		/*background-color: darkred;*/

    }

</style>
