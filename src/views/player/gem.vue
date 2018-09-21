<template>
    <div class="app-container">
        <div class="filter-container">
            <el-input :placeholder="输入用户UID" v-model="form.pid" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
            <el-date-picker v-model="form.end"  type="daterange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :default-time="['00:00:00', '23:59:59']"></el-date-picker>
            <el-date-picker
                    v-model="value13"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">search</el-button>
        </div>

        <el-table
                v-loading="listLoading"
                :data="list"
                element-loading-text="Loading"
                border
                fit
                highlight-current-row
                style="width: 100%;">
            <el-table-column align="center" label="UID" width="95">
                <template slot-scope="scope">
                    {{ scope.row.uid }}
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
        <div align="center" class="pagination-container">
            <el-pagination
                    v-show="pagenum>0"
                    :current-page="form.pageId+1"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="form.pageSize"
                    :total="pagenum*form.pageSize"
                    background layout=" prev, pager, next, jumper, sizes"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
        </div>

    </div>

</template>

<script>
  import {getPlayer} from "../../api/player";
  import axios from 'axios';

  export default {
    data() {
      return {
        list: null,
        pagenum: 0,
        listLoading: false,
        value13: '',
        form: {
          begin: '2018-09-12',
          end: '',
          moneyType: 0,
          pageId: 0,
          pageSize: 5,
          pid: undefined,
        },

      }
    },
    mounted() {
      this.listLoading = true
      this.getlist();
    },
    methods: {
      getlist() {
        if( this.form.pageId > 0 ) this.form.pageId--
        axios.post(
            "http://127.0.0.1:3001/user_value/value_list",
            this.form
        ).then((data) => {
          this.list = data.data.data;
          this.pagenum = data.data.page.num;
          this.listLoading = false
        })
      },
      handleFilter() {
        this.form.page = 0;
        this.getlist();
      },
      handleCurrentChange(cpage) {
          this.form.pageId = cpage;
          this.getlist();
      },
      handleSizeChange(psize) {
          this.form.pageSize = psize;
        this.getlist();
      },
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
