<template>
    <div class="tag-group-etap">
        <div class="tag-group-header">
            <div class="header-text">{{headerText}}</div>
            <div class="header-btn" @click="onBtnClick">{{btnText}}</div>
        </div>
        <div class="tag-group">
            <div class="tag-group-inner" v-for="(text, index) in value" :key='index'>
                <Tag :text="text" @onClick="onTagClick(text, index)"/>
            </div>
        </div>
    </div>
</template>

<script>
import Tag from './Tag'
export default {
    components: {
        Tag
    },
    props: {
        headerText: String,
        btnText: String,
        value: Array
    },
    data() {
        return {

        }
    },
    computed: {},
    methods: {
        onTagClick(text, index) {
            this.$emit('onTagClick', text, index)
        },
        onBtnClick() {
            this.$emit('onBtnClick')
        }
    },
    created() {},
    mounted() {},
    }
</script>
<style lang='scss' scoped>
.tag-group-etap{
    padding: 0px 16px;
}
.tag-group-header{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 13px;
}

.header-text{
    color: #333333;
}
.header-btn{
    color: #3696EF;
}
.tag-group{
    display: flex;
    flex-flow: row wrap;
    .tag-group-inner{
        max-width: 100%;
        box-sizing: border-box;
        margin: 6px 6px 6px 0px;
    }
}
</style>