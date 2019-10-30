<template>
  <div class="image-view-wrapper" :style="{ height }">
      <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      :src="src"
      :mode="mode"
      :lazyLoad-load="lazyLoad"
      @load="onLoad"
      @error="onError"
      v-if="!isLoading || !error"
      class="image-view"
      />
      <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      :mode="mode"
      :lazyLoad-load="lazyLoad"
      v-if="isLoading || error"
      class="image-view"
      />
      <!-- <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
      :mode="mode"
      :lazyLoad-load="lazyLoad"
      v-if="isLoading || error"
      class="image-view"
      /> -->
  </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        mode: {
            type: String,
            default: 'widthFix'
        },
        lazyLoad: {
            type: Boolean,
            default: true
        },
        round: {
            type: Boolean,
            default: false
        },
        height: {
            type: Number,
            default: 'auto'
        }
    },
    data() {
        return {
            isLoading: true,
            error: false
        }
    },
    watch: {
        src(newValue, preValue) {
            if (newValue && newValue.length > 0 && newValue !== preValue) {
                this.$nextTick(() => {
                    this.isLoading = true
                    this.error = false
                })
            }
        }
    },
    methods: {
        onClick() {
            this.$emit('onClick')
        },
        onError() {
            this.isLoading = false
            this.error = true
            // console.log('onError')
        },
        onLoad() {
            this.isLoading = false
            this.error = false
            // console.log('onLoad')
        }
    }
}
</script>

<style lang="scss" scoped>
.image-view-wrapper{
    width: 100%;
}
.image-view{
    width: 100%;
}
.round{
    border-radius: 50%; 
}
</style>