<template>
    <div class="BottomList">
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading left">Panel heading</div>
            <div class="panel-body">
                <SearchList />
            </div>

            <!-- Table -->
            <table class="table table-bordered table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr class="active">
                    <td>Row1</td>
                    <td>Row2</td>
                    <td>Row3</td>
                    <td>Row4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>
                <tr>
                    <td>Val1</td>
                    <td>Val2</td>
                    <td>Val3</td>
                    <td>Val4</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import SearchList from '@/components/SearchList.vue'
    export default {
        name: "BottomList",
        components: {
            SearchList
        }
    }
</script>

<style scoped>
    .left{
        /*float: left;*/
        text-align: left;
    }

</style>