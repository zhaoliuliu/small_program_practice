<template>
  <div class="auth-warap">
    <div class="auth-content">
      <div class="auth-top">
        <div class="auth-img">
          <ImageView 
          src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" 
          round 
          height="100%"
          mode="scaleToFill"/>
        </div>
        <div class="auth-tit">登录友谊库</div>
        <div class="auth-sub-tit">发现新世界</div>
      </div>
      <button 
      class="auth-btn"
      @getuserinfo="getUserInfo"
      open-type="getUserInfo" 
      >
        授权登录
      </button>
    </div>
  </div>
</template>

<script>
import ImageView from "../../components/base/ImageView";
export default {
  components: {
      ImageView
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
      getUserInfo() {
         this.$emit('getUserInfo') 
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.auth-warap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-content {
    position: relative;
    width: 270px;
    height: 248px;
    background: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;
}
.auth-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 25px;
}
.auth-img{
    width: 74px;
    height: 74px;
}
.auth-tit{
    font-size: 13px;
    color: #999999;
    margin-top: 18px;
}
.auth-sub-tit{
    font-size: 16px;
    margin-top: 7px;
}
.auth-btn{
    position: absolute;
    background-image: linear-gradient(90deg, #1EA3F5 0%, #0F87FC 100%);
    border-radius: 0 0 10px 10px;
    margin-top: 40px;
    color: #fff;
    font-size: 14px;
    line-height: 49px;
    left: 0px;
    right: 0px;
    bottom: 0
}
</style>