<template>
    <div class="group">
        <ul>
            <li 
                v-for="(item, index) of btnGrp" 
                :key="index"
                :class="[btnIndex == index ? 'selected' : '']"
                @click="changeBtn(index)"
            >{{item.name}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        btnIndex: Number,
        btnGrp: {
            type: Array,
            default: []
        }

    },
    methods: {
        changeBtn(index) {
            this.$emit('changeBtn', index)
        }
    }   
}
</script>

<style lang="less" scoped>
.group {
    width: 100%;
    ul {
        width:225px;
        height:30px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        border:1px solid rgba(221,175,89,1);
        margin: 0 auto;
        display: flex;
        flex: 1;
        justify-content: space-between;
        li {
           width: 113px;
           float: left;
           text-align: center;
           line-height: 30px;
           color: rgba(221,175,89,1);
           font-size: 14px;
           font-weight: 400;
        }
        .selected {
            background: rgba(221,175,89,1);
            color: #fff;
        }
       
    }
}
</style>

