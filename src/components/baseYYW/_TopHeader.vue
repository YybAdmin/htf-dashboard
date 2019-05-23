<template>
    <div>
        <ul class="top_header">
            <li 
                v-for="(item, index) of itemList" 
                :key="index"
                :class="[currentIndex == index ? 'selected' : '']"
                @click="changeTab(index)"
            >{{item.name}}</li>
        </ul>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopHeader",
    props: {
        itemList: Array,
        currentIndex: Number
    },
    data() {
        return {

        }
    },
    methods: {
        changeTab(index) {
            this.$emit('changeTab', index)
        }
    }
}
</script>

<style lang="less" scoped>
.top_header {
    width: 100%;
    height: 40px;
    display: flex;
    flex: 1;
    justify-content: space-around;
    li{
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;
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

