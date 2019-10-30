<template>
<div>
  <Auth  v-if="!isAuth" @getUserInfo='init'/>
  <div class="home" v-else>
    <SearchBar
    disabled
    @onClick="onSearchBarClick"
    :hot-search='hotSearch.keyword'
    />
    <HomeCard :data="HomeCard"/>
    <HomeBanner 
    img="http://www.youbaobao.xyz/book/res/bg.jpg"
    title="天天向上"
    subTitle="向习大大学习"
    @onclick="onBannerclic"
    />

    <div class="home-tuijian">
      <HomeBook 
      title="为你推荐"
      :row="1"
      :col='3'
      :data='recommend'
      mode='col'
      btn-text='换一批'
      @onMoreClick="recommendchannge('recommend')"
      @onBookClick="onBookClick"
      />
    </div>
    <div class="home-tuijian">
      <HomeBook 
      title="免费阅读"
      :row="2"
      :col='2'
      :data='freeRead'
      mode='row'
      btn-text='换一批'
      @onMoreClick="recommendchannge('freeRead')"
      @onBookClick="onBookClick"
      />
    </div>
    <div class="home-tuijian">
      <HomeBook 
      title="当前最热"
      :row="1"
      :col='4'
      :data='hotBook'
      mode='col'
      btn-text='换一批'
      @onMoreClick="recommendchannge('hotBook')"
      @onBookClick="onBookClick"
      />
    </div>
    <div class="home-tuijian">
      <HomeBook 
      title="分类查询"
      :row="2"
      :col='2'
      :data='category'
      mode='category'
      btn-text='查看全部'
      @onMoreClick="toCategoryPage"
      @onBookClick="onBookClick"
      />
    </div>
  </div>
</div>
</template>
<script>
import { get } from "@/utils/request";
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
import HomeBanner from "../../components/home/HomeBanner";
import HomeBook from "../../components/home/HomeBook";
import Auth from '../../components/base/Auth'
import {
  getHomeData, 
  getRecommend, 
  getFreeRead, 
  getHotBook,
  register
} from '@/api/index'
import {
  getSetting, 
  getUserInfo, 
  setStorageSync, 
  getStorageSync, 
  getUserOpenId, 
  getAccountInfoSync,
  showLoading,
  hideLoading
} from '@/api/wechat'

export default {
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  },
  data() {
    return {
      isAuth: false,
      hotSearch: {},
      HomeCard: {
        bookList: [],
        num: 0,
        userInfo: {
          avatar: '',
          nickName: ''
        },
      },
      recommend: [],
      hotBook: [],
      freeRead: [],
      category: []
    }
  },
  mounted() {
    // this.getHomedata()
    // this.getSetting()
  },
  methods: {
    init() {
      this.getSetting()
    },
    getHomedata(openId, userInfo) {
      getHomeData({openId}).then(res => {
        let data = res.data.data
        // console.log(data)
        this.hotSearch = data.hotSearch
        this.recommend = data.recommend
        this.hotBook = data.hotBook
        this.freeRead = data.freeRead
        this.category = data.category
        this.HomeCard.bookList = data.shelf
        this.HomeCard.userInfo = userInfo
        this.HomeCard.num = data.shelfCount
        hideLoading()
      }).catch(err => {
        hideLoading()
        // console.log('异常捕获', err)
      })
    },
    recommendchannge(key) {
      if (key === 'recommend') {
        getRecommend().then(res => {
          this.recommend = res.data.data
        })
      }
      if (key === 'freeRead') {
        getFreeRead().then(res => {
          this.freeRead = res.data.data
        })
      }
      if (key === 'hotBook') {
        getHotBook().then(res => {
          this.hotBook = res.data.data
        })
      }
    },
    onSearchBarClick() {
      console.log(this.hotSearch.keyword)
      // 跳转到搜索页面
      this.$router.push({
        path: "/pages/search/main",
        query: {
          hotSearchKey: this.hotSearch.keyword
        }
      })
    },
    onBookMoreClick() {
      console.log('BOOK onBookMoreClick')
    },
    onBookClick() {
      console.log('我是当前图书')
    },
    toCategoryPage() {
      // console.log('tioahzuantushu felei yemian ')
    },
    getSetting() {
      getSetting('userInfo', () => {
        // console.log('成功')
        this.isAuth = true
        showLoading('加载')
        this.getUserInfo()
      }, () => {
        // console.log('失败')
        this.isAuth = false
      })
    },
    getUserInfo() {
      const onOpenIdComplete =(openId, userInfo) => {
        this.getHomedata(openId, userInfo)
        register(openId, userInfo).then(res => {
          // console.log('注册', res)
        })
      }
      getUserInfo((userInfo) => {
        setStorageSync('userInfo', userInfo)
        const openId = getStorageSync('openId')
        if (openId || openId.length > 0) {
          // console.log('获得open id')
          onOpenIdComplete(openId, userInfo)
        } else {
          // console.log('请求 openId')
          getUserOpenId(openId => onOpenIdComplete(openId, userInfo))
        }
      }, () => {
        console.log('fail ') // 获取用户信息 ，抛出异常
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.home-tuijian{
  margin-top: 20px;
}
</style>
