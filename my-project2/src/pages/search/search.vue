<template>
    <div class="">
        <SearchBar :focus="searchFocus" @onChange="onChange"/>
        <TagGroup
        :value="hotSearch"
        header-text="热门搜索"
        btn-text="换一批"
        @onBtnClick='changHotSearch'
        @onTagClick="showBookdetail"
        v-if="historySearch.length > 0 && !showList"
        />
        <TagGroup
        :value="historySearch"
        header-text="历史搜索"
        btn-text="清空"
        @onBtnClick="clearHistorySearch"
        @onTagClick='searchKeyWord'
        v-if="hotSearch.length > 0 && !showList"
        />
        <SearchList :data="searchList" v-if="showList"/>
    </div>
</template>

<script>

import TagGroup from '../../components/base/TagGroup'
import SearchList from '../../components/search/SearchList'
import SearchBar from '../../components/home/SearchBar'
import { getStorageSync } from '../../api/wechat'
import {search} from '../../api'
export default {
    components: {
        TagGroup,
        SearchList,
        SearchBar
    },
    data() {
        return {
            hotSearch: [],
            historySearch: [],
            searchList: {},
            openId: ''
        }
    },
    computed: {
        showList() {
            const keys = Object.keys(this.searchList)
            return keys.length > 0
        }
    },
    methods: {
        // current tag 点击的时候
        showBookdetail(text, index) {
            console.log("进到图书页面")
        },
        changHotSearch() {
            console.log('更换热门搜索...')
        },
        clearHistorySearch() {
            console.log('我是清空按钮')
        },
        searchKeyWord() {
            console.log('我是清空key 按钮')
        },
        // 输入框实时变化的函数
        onChange(keyword) {
            // console.log(value)
            if (!keyword || keyword.trim().length === 0 ) {
                return
            }
            this.onSearch(keyword)
        },
        onSearch(keyword) {
            search({
                keyword, openId: this.openId
            }).then(res => {
                console.log('woshi onsearch', res)
                this.searchList = res.data.data
            })
        }
    },
    created() {},
    mounted() {
        this.openId = getStorageSync('openId')
        // console.log(this.openId)
    },
}
</script>
<style lang='scss' scoped>

</style>