<template>
    <div class="top_content">
        <span class="back-icon"></span>
        <span class="top_name">{{topName}}</span>
        <!-- <span class="bot_name">{{botName}}</span> -->
        <span class="search-icon"></span>
        <span class="characteristic-icon"></span>
    </div>
</template>

<script>
export default {
    props: ['topName', 'botName'],
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.top_content {
    // width: 100%;
    height: 43px;
    padding: 0 15px;
    // background: blue;
    line-height: 43px;
    text-align: center;
    position: relative;
    .back-icon {
        float: left;
        width:10px;
        height:17px; 
        background: red;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 15px;
    }
    .top_name{
        font-size:18px;
        font-weight: 400;
        display: inline-block;
        text-align: center;
    }
    .bot_name {
        font-size: 14px;
    }
    .search-icon {
        
    }
    .characteristic-icon {

    }
}
</style>

