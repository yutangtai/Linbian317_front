<template>
  <div class="container-fluid">
    <!-- title -->
    <div class="row q-mt-xl q-mb-lg q-pa-lg q-pb-sm text-center">
      <div class="col text-h5"><strong>林邊伴手禮</strong></div>
    </div>
    <!-- tabs -->
    <div class="row justify-between text-center shadow-2" style="position: sticky; top: 0; left: 0; z-index: 1000;">
      <div class="col q-py-sm tags" v-for="product in products" :key="product._id">
        <a :href="`#${product._id}`">{{ product.tabLabels }}</a>
      </div>
    </div>
    <!-- product -->
    <div class="column row-md q-mb-md-lg all" v-for="productItem in products" :key="productItem._id">
      <div class="col left" :id="productItem._id">
        <div class="imageBox">
          <div class="mask"></div>
          <q-img :src="leftImage(productItem)" :ratio="1" />
        </div>
        <div class="column box text-white">
          <div class="col-4 flex justify-center items-end">
            <div class="text-h4"><strong>{{ leftTitle(productItem) }}</strong></div>
          </div>
          <div class="col-8 q-px-lg q-pt-sm" style="letter-spacing: 1.5px; text-indent: 2rem; white-space: pre-line">
            <div v-if="leftPara1(productItem) !== 'null'" class="text-subtitle2">{{ leftPara1(productItem) }}</div>
            <div v-if="leftPara2(productItem) !== 'null'" class="text-subtitle2">{{ leftPara2(productItem) }}</div>
            <div v-if="leftPara3(productItem) !== 'null'" class="text-subtitle2">{{ leftPara3(productItem) }}</div>
          </div>
        </div>
      </div>

      <div class="col right">
        <div v-for="num in leftRight(productItem)" :key="num._id">
          <div class="column rightItem q-pt-xl" >
            <div class="col rightImage">
              <q-img :src="leftRightImage(num)"/>
            </div>
            <div class="col column textBox">
              <div class="col name">{{ leftRightName(num) }}</div>
              <div class="col">{{ leftRightContent(num) }}</div>
              <div class="col">{{ leftRightPrice(num) }} 元</div>
              <div class="col flex justify-end">
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column text-white justify-center items-center" style="width: 100%; height: 50px; background: #b60005;">
      <div class="col flex justify-center items-center">Copyright © 2013 by 社團法人屏東縣林仔邊自然文史保育協會</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Souvenir',
  data () {
    return {
      products: [],
      targetTab: '',
      leftArr: [],
      rightArr: [],
      rightArrLength: [],
      rightEach: []
    }
  },
  computed: {
  },
  methods: {
    leftImage: function (item) {
      return item?.left?.[0]?.image
    },
    leftTitle: function (item) {
      return item?.left?.[0]?.title
    },
    leftPara1: function (item) {
      return item?.left?.[0]?.intro_para1
    },
    leftPara2: function (item) {
      return item?.left?.[0]?.intro_para2
    },
    leftPara3: function (item) {
      return item?.left?.[0]?.intro_para3
    },
    leftRight: function (item) {
      return item?.left?.[0]?.right
    },
    leftRightImage: function (item) {
      return item?.image
    },
    leftRightName: function (item) {
      return item?.name
    },
    leftRightContent: function (item) {
      return item?.content
    },
    leftRightPrice: function (item) {
      return item?.price
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/products')
      this.products = data.result.map(product => {
        if (product.left.length > 0 && product.left[0].image) {
          product.left[0].image = `${process.env.VUE_APP_API}/files/${product.left[0].image}`
          if (product.left[0].right.length > 0) {
            for (let i = 0; i < product.left[0].right.length; i++) {
              if (product.left[0].right[i].image) {
                product.left[0].right[i].image = `${process.env.VUE_APP_API}/files/${product.left[0].right[i].image}`
              }
            }
          }
        }
        return product
      })

      // this.products.forEach((item) => {
      //   this.leftArr.push(item.left)
      // })

      // for (let i = 0; i < this.leftArr.length; i++) {
      //   this.leftArr[i].forEach((item) => {
      //     this.rightArr.push(item.right)
      //     this.rightArrLength.push(item.right.length)
      //   })
      // }
      // console.log(this.rightArrLength)

      // for (let i = 0; i < this.rightArr.length; i++) {
      //   this.rightArr[i].forEach((item) => {
      //     this.rightEach.push(item)
      //   })
      // }
    } catch (error) {
      console.log(error)
      this.$q.notify({
        color: 'negative',
        textColor: 'white',
        message: '取得商品失敗！',
        icon: 'fas fa-exclamation-circle',
        position: 'top',
        timeout: 2500
      })
    }
  }
}
</script>

<style scoped>
  .container-fluid {
    overflow-y: scroll;
  }
  .tags {
    background: #b60005;
    font-size: 1rem;
  }
  .tags:hover {
    background: #850004;
    font-size: 0.9rem;
    cursor: pointer;
  }
  .tags a {
    text-decoration: none;
    color: white;
    display: block;
    border-right: 1px solid white;
  }
  /* .tags a:last-child {
    border-right: none;
  } */
  .all {
    width: 100%;
    /* height: 500px; */
  }
  .left {
    position: relative;
  }
  .left .imageBox {
    width: 100%;
    height: 400px;
    display: flex;
  }
  .left .mask {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5)50%, rgba(0, 0, 0, 0.5)100%);

    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .box {
    width: 60%;
    height: 50%;
    background: #b60005;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  .right {
    background: #faf1d2;
  }
  .right .rightItem {
    width: 100%;
    height: 400px;
    border-bottom: 1px solid rgb(192, 174, 74);
  }
  .right .rightImage {
    width: 55%;
    height: 100%;
    margin: auto;
  }
  .rightImage img {
    width: 100%;
    height: 100%;
  }
  .right .textBox {
    width: 55%;
    margin: 0 auto;
    padding-top: 40px;
    font-size: 1rem;
    letter-spacing: 1.5px;
  }
  .textBox .name {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
  @media (min-width: 576px) {
    .left .imageBox {
      width: 100%;
      height: 500px;
      display: flex;
    }
    .box {
      width: 60%;
      height: 45%;
    }
  }
  @media (min-width: 768px) {
    .box {
      width: 60%;
      height: 48%;
    }
  }
  @media (min-width: 992px) {
    .box {
      width: 45%;
      height: 55%;
    }
  }
</style>
