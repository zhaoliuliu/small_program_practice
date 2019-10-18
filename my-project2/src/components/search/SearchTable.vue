<template>
    <div class="search-table-wrap">
        <div class="search-table-inner" v-for="(book, index) in data" :key="index" @click="onClick(book)">
            <div class="search-table-book">
                <ImageView :src="book.cover" height="100%" mode="scaleToFill"/>
            </div>
            <div class="search-table-txt">
                <div class="search-table-title">{{book.title}}</div>
                <div class="search-table-author">{{book.author}}</div>
                <div class="search-table-dec">{{book.categoryText}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageView from "../../components/base/ImageView"
export default {
    components: {
        ImageView
    },
    props: {
        data: Array
    },
    data() {
        return {

        }
    },
    computed: {
    },
    methods: {
        onClick(book) {
            this.$emit('onClick', book)
        }
    },
    created() {},
    mounted() {},
    }
</script>
<style lang='scss' scoped>
.search-table-wrap{
    padding: 0px 16px 0px;

}
.search-table-inner{
    display: flex;
    margin-top: 28px;
}
.search-table-book{
    width: 47px;
    height: 69px;
    overflow: hidden;
}
.search-table-txt{
    margin-left: 15px;
    width: 80%;
}
.search-table-title{
    font-size: 16px;
    color: #333333;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break:keep-all;
    white-space:nowrap;
}
.search-table-author{
    font-size: 13px;
    color: rgba(0,0,0,0.65);
    line-height: 18px;
}
.search-table-dec{
    font-size: 13px;
    color: rgba(0,0,0,0.45);
    line-height: 18px;
    margin-top: 5px;
}
</style>