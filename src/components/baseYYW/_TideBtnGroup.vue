<template>
    <div class="TideInfo">
        <div class="description">
            <span>产品保有量与份额分布</span>    
        </div>
        <ul>
            <li 
                v-for="(item, index) of TideGroup"
                :key="index"
                :class="[tideCurrent == index ? 'selected' : '']"
                @click="tideChange(index)"
            >

                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tideCurrent: Number,
        TideGroup: Array
    },
    data() {
        return {

        }
    },
    methods: {
        tideChange(index) {
            this.$emit('tideChange', index)
        }
    }
}
</script>

<style lang="less" scoped>
.TideInfo {
    width: 100%;
    padding-right: 15px;
    .description {
        display: inline;
        span {
            display: inline-block;
            padding: 0 15px 0 13px;
            height:30px;
            line-height: 30px;
            color: rgba(221,175,89,1);
            font-size:15px;font-weight:400;
            background:rgba(254,247,233,1);
            border-radius:0px 100px 100px 0px; 
        }
        
    }
    ul {
        display: flex;
        // width: 40%;
        background: red;
        float: right;
        margin-right: 15px;
        height: 25px;
        line-height: 25px;
        justify-content: flex-end;
        background:rgba(255,255,255,1);
        border-radius:2px;
        border:1px solid rgba(221,175,89,1);
        li {
            text-align: center;
            width: 43px;
        }
        .selected {
            background:rgba(221,175,89,1);
            color: #fff;
        }
    }
}
</style>

