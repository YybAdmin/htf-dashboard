<template>
    <div class="total">
        <span class="totalInfo">总保有量:</span>
        <span class="numInfo">367.31亿元</span>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.total {
    height: 51px;
    line-height: 51px;
    padding: 0 15px;
    span {
        font-size: 14px;
        font-weight:400;
        color:rgba(153,153,153,1);
        &.numInfo {
            float: right;
            color:rgba(102,102,102,1);
        }
    }
}
</style>


