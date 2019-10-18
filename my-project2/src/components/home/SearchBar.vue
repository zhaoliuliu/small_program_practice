<template>
  <div class="search-bar" @click="onSearchBarClick">
      <div class="search-bar-wrap">
          <input type="text" 
          class="search-bar-input"
          :focus="focus"
          :disabled="disabled"
          :maxlength="limit"
          :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch"
          placeholder-style="#858C96"
          v-model="searchWord"
          @input="onChange"
          confirm-type="search"
          @confirm="onConfirm"
          >
          <i @click="onClearClick" v-if="searchWord.length > 0">X</i>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 10
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick() {
      this.$emit('onClick')
    },
    onClearClick() {
      this.searchWord = '',
      this.$emit('onClear')
    },
    onChange(e) {
      const {value} = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm(e) {
      const {value} = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue() {
      this.searchWord = v
    },
    getValue() {
      this.searchWord
    }
  }

}
</script>

<style lang="scss" scoped>
.search-bar{
  margin: 15px;
  border-radius: 20px;
  font-size: 14px;
  background: #F5F7F9;
  .search-bar-wrap{
    display: flex;
    align-items: center;
    padding: 10px;
    i{
      font-size: 12px;
      margin-right: 10px;
      background: #ddd;
      color: white;
      font-style: normal;
      width: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
    }
  }
  .search-bar-input{
    flex: 1;
    align-items: center;
    // background: #f0f;
    border-radius: 20px;
    margin: 0px 12px;
  }
}
</style>