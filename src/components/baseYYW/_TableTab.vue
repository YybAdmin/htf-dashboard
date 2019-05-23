<template>
    <div class="Table">
        <ul>
            <li 
                v-for="(item, index) of tableGroup"
                :key="index"
                :class="[tableCurrent == index ? 'selected' : '']"
                @click="tableChange(index)"
            >{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tableGroup: Array,
        tableCurrent: Number
    },
    data() {
        return {

        }
    },
    methods: {
        tableChange(index) {
            this.$emit('tableChange', index)
        }
    }
}
</script>

<style lang="less" scoped>
.Table {
    width: 100%;
    ul {
        display: flex;
        flex: 1;
        line-height: 34px;
        height: 34px;
        justify-content: space-between;
        li {
            width: 33.3%;
            text-align: center;
            background: rgba(250,250,250,1);
        }
        .selected {
            background: #fff;
            height: 33px;
            color: rgba(221,175,89,1);
            position: relative;
        }
        .selected:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            font-weight: 500;
            left: 0;
            right: 0;
            margin: auto;
            bottom: 0;
            background-color: #DDAF59;
            border-radius: 2px;
        }
    }
}
</style>


