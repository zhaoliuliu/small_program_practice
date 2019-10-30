<template>
    <div class="tag-wrap" @click="onClick">
        <div class="tag">{{text.title}}</div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        text: {
            type: Object,
            default: ''
        }
    },
    data() {
        return {
        }
    },
    computed: {},
    methods: {
        onClick() {
            this.$emit('onClick')
        }
    },
    created() {},
    mounted() {},
    }
</script>
<style lang='scss' scoped>
.tag-wrap{
    background: #F7F7F9;
    border-radius: 32px;
    padding: 0px 10px;
    .tag{
        overflow: hidden;
        text-overflow: ellipsis;
        word-break:keep-all;
        white-space:nowrap;
        font-size: 14px;
        color: #272E37;
        line-height: 35px;
    }
}
</style>