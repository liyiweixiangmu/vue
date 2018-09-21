<template>
    <div class="app-container">
        <el-table
                v-loading="listLoading"
                :data="list"
                element-loading-text="Loading"
                border
                fit
                highlight-current-row>
            <el-table-column align="center" label="ID" width="95">
                <template slot-scope="scope">
                    {{ scope.row.id }}
                </template>
            </el-table-column>
            <el-table-column label="changeNum">
                <template slot-scope="scope">
                    {{ scope.row.changeNum }}
                </template>
            </el-table-column>
            <el-table-column label="changeType">
                <template slot-scope="scope">
                    {{ scope.row.changeType |changeType}}
                </template>
            </el-table-column>
            <el-table-column label="content">
                <template slot-scope="scope">
                    {{ scope.row.content }}
                </template>
            </el-table-column>
            <el-table-column label="createTime">
                <template slot-scope="scope">
                    {{ scope.row.createTime }}
                </template>
            </el-table-column>
            <el-table-column label="currentNum">
                <template slot-scope="scope">
                    {{ scope.row.currentNum }}
                </template>
            </el-table-column>
            <el-table-column label="incomeType">
                <template slot-scope="scope">
                    {{ scope.row.incomeType | incomeType}}
                </template>
            </el-table-column>
            <el-table-column label="moneyType">
                <template slot-scope="scope">
                    {{ scope.row.moneyType | moneyType}}
                </template>
            </el-table-column>
            <el-table-column label="serverType">
                <template slot-scope="scope">
                    {{ scope.row.serverType | serverType}}
                </template>
            </el-table-column>
        </el-table>
        <div align="center" class="app-container">
            <!--<el-pagination-->
                    <!--background-->
                    <!--layout="prev, pager, next, sizes, total, jumper"-->
                    <!--:page-sizes="[5, 10, 15, 20]"-->
                    <!--:page-size="pagesize"-->
                    <!--:total="list.length"-->
                    <!--@current-change="handleCurrentChange"-->
                    <!--@size-change="handleSizeChange">-->
            <!--</el-pagination>-->
            <div class="el-pagination">
                <span class="el-pagination__total">第{{currpage+1}}页/共{{pagenum}}页</span>
                <ul class="el-pager">
                    <li class="number" @click="pageroll(0)" >第一页</li>
                    <li class="number" @click="pageroll(-1)" >上一页</li>
                    <li class="number" @click="pageroll(1)" >下一页</li>
                    <li class="number" @click="pageroll(2)" >最后一页</li>
                </ul>
            </div>

        </div>

    </div>

</template>

<script>
    import { getPlayer } from "../../api/player";
    import axios from 'axios';
    export default {
        data() {
            return {
                pagesize: 5,
                currpage: 0,
                form: {
                    begin: '2018-07-27',
                    end: '2018-09-20',
                    incomeType: 1,
                    changeType: 11,
                    moneyType: 1,
                    pageId: 0,
                    pageSize: 5,
                },
                list:[],

                listLoading: false,
                pagenum: 0,
            }
        },
        mounted() {
          this.listLoading = true
          this.form.pageId = this.currpage -1;
          this.form.pageSize = this.pagesize;
          this.getlist();
        },
        methods: {
            getlist() {
                this.form.pageId = this.currpage;
                this.form.pageSize = this.pagesize;
                axios.post(
                    "http://127.0.0.1:3001/user_value/value_list",
                    this.form
                ).then((data) =>{
                    // console.log('---list---')
                    // console.log(data.data.data)
                    this.list = data.data.data;
                    this.pagenum = data.data.page.num;
                    this.listLoading = false
                })
            },
            // handleCurrentChange(cpage) {
            //     this.currpage = cpage;
            // },
            // handleSizeChange(psize) {
            //     this.pagesize = psize;
            // },
            pageroll(pageid) {
                switch (pageid) {
                    //首页
                    case 0:
                        this.currpage = 0;
                        break;
                    //上一页
                    case -1:
                        if (this.currpage > 0)
                            this.currpage -= 1;
                        break;
                    //下一页
                    case 1:
                        if (this.currpage < this.pagenum - 1)
                            this.currpage += 1;
                        break;
                    //最后一页
                    case 2:
                        this.currpage = this.pagenum - 1;
                        break;
                }
                this.getlist()
            }

        }
    }
</script>
