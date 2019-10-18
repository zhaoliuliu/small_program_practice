<template>
  <div class="home-banner" @click="onclick">
      <div class="bg-img" :style="{ backgroundImage: bgImage}">
          <div class="title">{{title}}</div>
          <div class="sub-title"><span>{{subTitle}}</span></div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        subTitle: String,
        img: String
    },
    computed: {
        bgImage() {
            return 'url(' + this.img + ')'
        }
    },
    mehtods: {
        onclick() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.home-banner{
    margin:20px 20px 0px;
}
.bg-img{
    height: 125px;
    border-radius: 15px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title{
    // padding: 20px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
}
.sub-title{
    font-size: 12px;
    color: #fff;
    line-height: 35px;
    text-align: center;
    span{
        display: inline-block;
        text-align: center;
        background: skyblue;
        border: 1px solid #fff;
        padding: 0px 20px;
        border-radius: 30px;
    }
}
</style>