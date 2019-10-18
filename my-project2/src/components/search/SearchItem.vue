<template>
    <div class="search-item-wrap" @click="onClick">
        <div class="search-item-icon">
            {{icon}}
        </div>
        <div class="search-item-text">
            <div class="search-item-tit">{{title}}</div>
            <div class="search-item-subtext">{{subTitle}}</div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        title: String,
        icon: String,
        subTitle: String
    },
    data() {
        return {

        }
    },
    computed: {},
    methods: {
        onClick() {
             this.$emit('onClick', book)
        }
    },
    created() {},
    mounted() {},
    }
</script>
<style lang='scss' scoped>
.search-item-wrap{
    display: flex;
    align-items: center;
    padding: 27px 16px 0px;
}
.search-item-icon{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #F7F7F9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}

.search-item-text{
    margin-left: 10px;
}
.search-item-tit{
    font-size: 14px;
    color: #333333; 
}
.search-item-subtext{
    font-size: 12px;
    color: rgba(0,0,0,0.45);
}
</style>