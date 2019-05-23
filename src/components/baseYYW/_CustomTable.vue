<template>
    <div class="tableContainer">
        <div class="tableHeader">
            <span class="line"></span>
            <span class="tableName">产品列表</span>
        </div>
        <div id="table">
            <Table  height="200" border :row-class-name="rowClassName" :columns="columns" :data="content" @on-sort-change="changeSort"></Table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Table } from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Table',Table);
export default {
    data() {
        return {
            columns:[
                {title: '子渠道名称',key: 'name',width: 96,fixed: 'left'},
                {
                    key: 'age',
                    width: 127,
                    sortable: 'custom',
                    renderHeader: (h, params) => {
                        return h('div',{
                            style: {
                                width: '80%'
                            }
                        },[
                            h('span',{
                                class: 'show'
                            }, '当月保有量(万元)'),
                            h('span',{
                                class: 'show'
                            }, '上月保有量(万元)')
                        ])
                    }
                },
                {
                    title: '月增长率',
                    key: 'name',
                    width: 80,
                    sortable: 'custom', 
                    renderHeader: (h, params) => {
                        return h('div',{
                            style: {
                                width: '80%'
                            }
                        },[
                            h('span',{
                                class: 'show yue',
                            }, '月增长率')
                        ])
                    }
                },
                {
                    key: 'age',
                    width: 120, 
                    sortable: 'custom',
                    renderHeader: (h, params) => {
                        return h('div',{
                            style: {
                                width: '80%'
                            }
                        },[
                            h('span',{
                                class: 'show'
                            }, '当月日均(万元)'),
                            h('span',{
                                class: 'show'
                            }, '上月日均(万元)')
                        ])
                    }
                },
                {title: 'Address',key: 'address',width: 100}
            ],
            content: [
                {name: 'John Brown',age: 18,address: 'New York No. 1 Lake Park',date: '2016-10-03'},
                {name: 'Jim Green',age: 24,address: 'London No. 1 Lake Park',date: '2016-10-01'},
                {name: 'Joe Black',age: 30,address: 'Sydney No. 1 Lake Park',date: '2016-10-02'},
                {name: 'Jon Snow',age: 26,address: 'Ottawa No. 2 Lake Park',date: '2016-10-04'},
                {name: 'John Brown',age: 18,address: 'New York No. 1 Lake Park',date: '2016-10-03'},
                {name: 'Jim Green',age: 24,address: 'London No. 1 Lake Park',date: '2016-10-01'},
                {name: 'Joe Black',age: 30,address: 'Sydney No. 1 Lake Park',date: '2016-10-02'},
                {name: 'Jon Snow',age: 26,address: 'Ottawa No. 2 Lake Park',date: '2016-10-04'},
            ]
        }
    },
    mounted() {

    },
    methods: {
        rowClassName :function (row, index) {
            if(index%2==0){
                return 'ivu-table-stripe-even';
            }
            else return 'ivu-table-stripe-odd';
        },
        changeSort(column) {
            console.log(column)
        }
    }
}

</script>

<style lang="less">
.tableContainer {
    .tableHeader {
        height: 45px;
        width: 100%;
        padding-left: 15px;
        .line {
            width: 2px;
            height: 15px;
            display: inline-block;
            background:#DDAF59;
            vertical-align: middle;
            margin-top: -3px;
        }
        .tableName {
            font-size:14px;
            font-weight:400;
            color:rgba(51,51,51,1);
            margin-left: 10px;
            line-height: 45px;
        }
    }
    #table {
        width: 100%;
        .ivu-table-wrapper {
            border-left: none;
            border-right: none; 
        }
        .ivu-table-wrapper .ivu-table-header th {
            background-color: #F8F7F4;
            font-weight:400;
            font-size: 13px;
            text-align: center;

        }
        /*偶数行*/
        .ivu-table-stripe-even td{
            background-color: #FFFFFF!important;
        }
        /*奇数行*/
        .ivu-table-stripe-odd td{
            background-color: #F8F7F4!important;
        }
        .ivu-table:after{
            content: '';
            width: 0;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background-color: #dcdee2;
            z-index: 3;
        }
        .ivu-table:before {
            content: '';
            width: 100%;
            height: 0;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #dcdee2;
            z-index: 1;
        }
        .ivu-table-cell {
            padding:0;
            display: flex;
            // flex: 1;
            align-items: center;
            justify-content: center;
            
        }
   
        .ivu-table-sort i.on {
            color:#DDAF59;
        }
        .ivu-table-sort i:hover {
            color:#DDAF59;
        }
        .show {
            display: inline-block;
            width: auto;
            font-size: 12px;
        }
        

        .ivu-table-fixed, .ivu-table-fixed-right {
            -webkit-box-shadow: 0 0 0 0 rgba(0,0,0,.2);
            box-shadow: 0 0 0 0 rgba(0,0,0,.2);
        }

        .ivu-table-fixed-header thead tr th:nth-child(1) {
            background: #F8F7F4;
        }
        
    }
    
    
}

</style>


