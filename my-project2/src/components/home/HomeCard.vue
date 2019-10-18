<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView
            :src="data.userInfo.avatarUrl"
            height="100%"
            mode="scaleToFill"
            round
          />
        </div>
        <div class="nickname">{{data.userInfo.province}}</div>
        <div class="shelf-text">书架共{{data.num}}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div class="book-img-wrap" v-for="(item, index) in data.bookList" :key="index" @click="onBookClick">
              <ImageView
            :src="item.cover"
            height="100%"
            mode="scaleToFill"
          />
          </div>
        </div>
        <div class="shelf-wrapper">
            <div class="shelf">书架</div>
            <span class="arrow">></span>
        </div>
      </div>
      <div class="feedback-wrraper" @click="onFeedBack">反馈</div>
    </div>
  </div>
</template>

<script>
import ImageView from "../../components/base/ImageView";
export default {
  components: {
    ImageView
  },
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  method: {
    gotoShelf() {},
    onBookClick() {
      this.$emit('onClick')
    },
    sign() {},
    onFeedBack() {
        
    }
  }
};
</script>

<style lang="scss" scoped>
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0px;
}
.home-card-inner {
    position: relative;
    padding: 20px 17px;
    box-sizing: border-box;
}
.user-info {
  display: flex;
  align-items: center;
  .avatar-wrapper {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
  }
  .nickname,
  .shelf-text {
    font-size: 12px;
    color: #ffffff;
  }
  .nickname {
    margin: 0px 5px;
  }
  .shelf-text {
    opacity: 0.7;
  }
  .round-item {
    width: 4px;
    height: 4px;
    background: #a2a2a2;
    border-radius: 50%;
    margin: 0px 8px;
  }
}
.book-info {
    display: flex;
    margin-top: 16px;
    .book-wrapper{
        flex: 1;
        display: flex;
        justify-content: space-around;
    }
    .book-img-wrap{
        width: 72px;
        height: 101px;
    }
    .shelf-wrapper{
        display: flex;
        align-items: center;
        .shelf{
            width: 11px;
            font-size: 10px;
            color: #FFFFFF;
            word-break: break-word;
            opacity: 0.8;
        }
        .arrow{
            color:  #828489;
        }
    }
}
.feedback-wrraper {
    background: rgba(216, 216, 216, 0.3);
    border-radius: 200px 0 0 200px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    position: absolute;
    right: 0px;
    top:20px;
    width: 45px;
    line-height: 24px;
}
</style>