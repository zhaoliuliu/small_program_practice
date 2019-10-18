<template>
  <div class="home-book">
      <div class="home-book-header">{{title}}</div>
      <div class="home-book-content">
          <div class="home-book-row" v-for="(item, index) in bookData" :key="index">
              <div class="home-book-col" v-for="(book, bookIndex) in item" :key="bookIndex" :style="{flex: '0 0 ' + (100/col) + '%'}">
                  <div class="book-wrap" 
                  :style="{ flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row'}"
                  @click="onBookClick"
                  v-if="mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW"
                  >
                      <div class="book-img-wrap">
                          <ImageView :src="book.cover" height="100%" mode="scaleToFill"/>
                      </div>
                      <div class="book-title-wrap book-title-col" v-if="mode === HOME_BOOK_MODE.COL">
                          <div class="book-title">
                              {{book.title}}
                          </div>
                      </div>
                      <div class="book-title-wrap book-title-row" v-else>
                          <div class="book-title">
                              {{book.title}}
                          </div>
                          <div class="book-author">
                              {{book.author}}
                          </div>
                          <div class="book-category">
                              {{book.categoryText}}
                          </div>
                      </div>
                  </div>
                  <div v-else class="category-wrap">
                      <div class="category-text">{{book.text}}</div>
                      <div class="category-num">{{book.num}}</div>
                      <div class="category-img-wrapper">
                          <div class="category-img1">
                             <ImageView :src="book.cover" height="100%"  mode="scaleToFill"/> 
                          </div>
                          <div class="category-img2">
                             <ImageView :src="book.cover2" height="100%" mode="scaleToFill"/> 
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
      <div class="home-book-footer"  v-if="showBtn" @click="onMoreClick">
          <button class="home-book-button">{{btnText}}</button>
      </div>
  </div>
</template>

<script>
import { HOME_BOOK_MODE, CATEGORY } from '@/utils/const'
import ImageView from "../../components/base/ImageView";
export default {
    mounted() {
        // console.log(this.bookData)
        // console.log(this.mode)
        // console.log(HOME_BOOK_MODE.COL)
    },
    components: {
        ImageView
    },
    props: {
        title: String,
        data: {
            type: Array,
            defaul: []
        },
        btnText: String,
        row: {
            type: Number,
            defaul: 0
        },
        col: {
            type: Number,
            default: 1
        },
        mode: {
            type: String,
            default: HOME_BOOK_MODE.row
        },
        showTitle: {
            type: Boolean,
            default: true
        },
        showBtn: {
            type: Boolean,
            default: true
        },
        linearBg: {
            type: Boolean,
            default: false
        },

    },
    computed: {
        HOME_BOOK_MODE() {
            return HOME_BOOK_MODE
        },
        bookData() {
            const { data, row, col} = this
            if (data && data.length > 0) {
                data.forEach(book => {
                    book.text = CATEGORY[book.categoryText.toLowerCase()]
                });
                const number = row * col
                const _bookData = data.slice(0, number)
                const _bookDataRow = []
                let _row = 0
                while (_row < row) {
                    _bookDataRow.push(_bookData.slice(_row * col, _row * col + col))
                    _row++
                }
                return _bookDataRow
            } else {
                return []
            }
        }
    },
    methods: {
        // 点击更多按钮事件
        onMoreClick() {
            this.$emit('onMoreClick')
        },
        // 图书点击事件
        onBookClick() {
            this.$emit('onBookClick')
        }
    }
}
</script>

<style lang="scss" scoped>
.home-book{
    margin: 0px 20px;
}
.book-img-wrap{
    width: 100%;
    height: 88px;
}
.home-book-content{
    margin-top: 22px;
}
.home-book-row{
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10.5px;
}
.home-book-col{
    padding: 0 8px;
    box-sizing: border-box;
}
.book-wrap{
    display: flex;
}
.book-title-col{
    .book-title{
        font-size: 12px;
        line-height: 16.5px;
        max-height: 33px;
        overflow: hidden;
        word-break: break-word;
    }
}
.book-title-row{
    flex: 0 0 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        overflow: hidden;
        word-break: break-word;
    }
    .book-title{
        font-size: 14px;
        line-height: 18.5px;
        max-height: 36px;
        color: #1F1F1F;
    }
    .book-author, .book-category{
       font-size: 12px;
        color: #868686; 
        line-height: 14px;
        max-height: 14px;
    }
}

.category-wrap{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #F8F9FB;
    border-radius: 10px;
    height: 96px;
    padding: 13px 16px;
    box-sizing: border-box;
}

.category-text{
    color: #212832;
    font-size: 16px;
    line-height: 22px;
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.category-num{
    font-size: 12px;
    color: #868686;
}

.category-img-wrapper{
    position: absolute;
    right: 0px;
    bottom: 0px;
    .category-img1{
        position: absolute;
        right: 0px;
        bottom: 0px;
        z-index: 100;
        width: 48px;
        height: 66px;
    }
    .category-img2{
        position: absolute;
        z-index: 90;
        width: 36px;
        right: 30px;
        bottom: 0px;
        height: 56px;
    }
}

</style>
<style lang="scss">
.home-book-button{
    background: #FFFFFF;
    border: 1px solid #EDEEEE;
    border-radius: 22px;
    outline-style: none;
    font-size: 14px;
    color: #3696EF;
    margin-top: 20px;
}
</style>