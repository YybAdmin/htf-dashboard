<template>
    <div>
        <ul class="switchTab">
            <li 
                :class="[switchIndex == index ? 'selected' : '']"
                v-for="(item, index) of switchList"
                :key="index"
                @click="switchTab(index)"
            >{{item.name}}</li>
        </ul>
    </div>
</template>


<script>
export default {
    props: {
        switchIndex: Number,
        switchList: Array
    },
    data() {
        return {

        }
    },
    methods: {
        switchTab(index) {
            this.$emit('switchTab', index)
        }
    }
}
</script>

<style lang="less" scoped>
.switchTab {
    display: flex;
    flex: 1;
    height: 30px;
    justify-content: flex-start;
    li {
        display: inline-block;
        // width:56px;
        font-size:14px;
        font-weight:400;
        margin-right: 20px;
    }
    .selected {
        color:#DDAF59;
        position: relative;
    }
    .selected:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 3px;
        font-weight: 500;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 5px;
        background-color: #DDAF59;
        border-radius: 2px;
    }
}
</style>

