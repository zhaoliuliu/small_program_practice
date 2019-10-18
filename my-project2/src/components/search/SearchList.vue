<template>
    <div class="search-list-wrapper">
        <div class="" v-for="(item, index) in data.category" :key="index">
            <SearchItem 
            :icon="item.icon"
            :title="item.categoryText"
            :subTitle="item.category"
            @onClick="showList(item)"
            />
        </div>
        <SearchTable :data="data.book" @onClick="onBookClick"
        />
        <van-button type="primary">按钮</van-button>
    </div>
</template>

<script>
import SearchItem from '../../components/search/SearchItem'
import SearchTable from '../../components/search/SearchTable'
export default {
    components: {
        SearchItem,
        SearchTable
    },
    props: {
        data: Object
    },
    data() {
        return {
            
        }
    },
    computed: {},
    methods: {
        showList(e) {
            console.log('我是searchItem', e)
        },
        onBookClick(book) {
            console.log('我是searchTable', book)
        }
    },
    created() {},
    mounted() {},
    }
</script>
<style lang='scss' scoped>

</style>