<template>
  <div id="frontPage" class="container-fluid">
    <div class="row">
      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="calc(100vh - 50px)"
        style="width: 100%"
      >
        <q-carousel-slide v-for="(item, index) in indexDatas" :key="item._id" :name="index - 1" :img-src="item.image" />
    </q-carousel>
    </div>
    <div class="row countupBoxes text-center">
      <div class="col-6 num-box col-md-3 order-md-2 column justify-center items-center bg-amber-1" style="height: 120px;">
        <div class="col flex justify-center items-end num-title">環境教育</div>
        <div class="col flex justify-center num">
          <ICountUp
            :start="0"
            :endVal="endVal1"
            :duration="10"
            :delay="delay"
            :options="options"
            @ready="onReady1"
          />
          <span> 人</span>
        </div>
      </div>
      <div class="col-6 num-box col-md-3 order-md-first column justify-center items-center bg-amber-2" style="height: 120px;">
        <div class="col flex justify-center items-end num-title">深度體驗</div>
        <div class="col flex justify-center num">
          <ICountUp
            :start="0"
            :endVal="endVal2"
            :duration="10"
            :delay="delay"
            :options="options"
            @ready="onReady2"
          />
          <span> 人</span>
        </div>
      </div>
      <div class="col-6 col-md-3 column justify-center items-center bg-amber-2" style="height: 120px;">
        <div class="col flex justify-center items-end num-title">淨灘人數</div>
        <div class="col flex justify-center num">
          <ICountUp
            :start="0"
            :endVal="endVal3"
            :delay="delay"
            :duration="10"
            :options="options"
            @ready="onReady3"
          />
          <span> 人</span>
        </div>
      </div>
      <div class="col-6 col-md-3 column justify-center items-center bg-amber-1" style="height: 120px;">
        <div class="col flex justify-center items-end num-title">農廢棄再生</div>
        <div class="col flex justify-center num">
          <ICountUp
            :start="0"
            :endVal="endVal4"
            :duration="10"
            :delay="delay"
            :options="options"
            @ready="onReady4"
          />
          <span> 公斤</span>
        </div>
      </div>
    </div>
    <div class="column q-my-md q-pa-md text-center" style="height: 200px">
      <div class="col row justify-center items-end mid-title"><strong>林邊光采濕地農圃</strong></div>
      <div class="col row justify-center items-start q-pt-md mid-text">帶給你最有價值的屏東深度旅遊！</div>
    </div>
    <div class="column">
      <div class="col" style="position: relative">
        <q-parallax
          :height="300"
          :speed="0.3"
        >
          <template v-slot:media>
            <img src="../../assets/parallax02_vegatible.jpg" style="width: 800px; height: auto;">
          </template>
          <div class="mask"></div>
          <div class="columm q-pa-xl para-box" style="z-index: 999;">
            <div class="col para-title q-mb-md text-center text-white"><strong>光電板下的循環魔法</strong></div>
            <div class="col para-text q-mx-auto text-white">
              帶您親自走入光電板叢林下的萬千世界，
              看看這塊披著一層薄鹽的土地，能變出什麼魔法。
            </div>
          </div>
        </q-parallax>
      </div>
      <div class="col">
        <q-parallax
          :height="300"
          :speed="0.3"
        >
          <template v-slot:media>
            <img src="../../assets/parallax03_crab.jpg" style="width: auto; height: 750px;">
          </template>
          <div class="mask"></div>
          <div class="columm q-pa-xl para-box" style="z-index: 999;">
            <div class="col para-title q-mb-md text-center text-white"><strong>蟹蟹您來月芽灣</strong></div>
            <div class="col para-text q-mx-auto text-white">
              邀請您前往美麗的月芽灣，來場與陽光浪花賽跑的古早體驗。
              幸運的話，還可以認識到全世界跑最快的沙蟹喔！
            </div>
          </div>
        </q-parallax>
      </div>
      <div class="col">
        <q-parallax
          :height="300"
          :speed="0.3"
        >
          <template v-slot:media>
            <img src="../../assets/parallax03_egg.jpg" style="width: 900px; height: auto;">
          </template>
          <div class="mask"></div>
          <div class="columm q-pa-xl para-box" style="z-index: 999;">
            <div class="col para-title q-mb-md text-center text-white"><strong>林邊鴨蛋玩泥巴</strong></div>
            <div class="col para-text q-mx-auto text-white">
              聽我們話說從前，認識林邊一百年在地養鴨產業、學習老祖宗食物保存的智慧。
              再捲起袖子攪和泥巴，重溫離你很遠的手泥感，親手製做送禮自用兩相宜的紅土鹹蛋！
            </div>
          </div>
        </q-parallax>
      </div>
    </div>
    <div class="column q-my-md q-pa-md text-center" style="height: 200px">
      <div class="col row justify-center items-end text-h5">
        <q-btn
          label="更多體驗活動"
          unelevated
          rounded
          color="negative"
          class="q-px-sm"
        />
      </div>
      <div class="col row justify-center items-start q-pt-md">開放團體預約，歡迎洽詢客製規劃！</div>
    </div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
  name: 'frontPage',
  components: {
    ICountUp
  },
  data () {
    return {
      slide: 1,
      autoplay: true,
      delay: 5000,
      endVal1: 0,
      endVal2: 0,
      endVal3: 0,
      endVal4: 0,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: 0
      },
      indexDatas: [],
      indexNumDatas: []
    }
  },
  methods: {
    onReady1: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal1)
    },
    onReady2: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal2)
    },
    onReady3: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal3)
    },
    onReady4: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal4)
    }
  },
  async mounted () {
    try {
      const data = await this.$axios.get('/indexData')
      const data2 = await this.$axios.get('/indexNumData')

      this.indexDatas = data.data.result.map(indexData => {
        if (indexData.image) {
          indexData.image = `${process.env.VUE_APP_API}/files/${indexData.image}`
        }
        return indexData
      })

      this.indexNumDatas = data2.data.result.map(indexNumData => {
        return indexNumData
      })

      this.endVal1 = parseInt(this.indexNumDatas[0].num_edu)
      this.endVal2 = parseInt(this.indexNumDatas[0].num_exp)
      this.endVal3 = parseInt(this.indexNumDatas[0].num_people)
      this.endVal4 = parseInt(this.indexNumDatas[0].num_trash)
    } catch (error) {
      console.error(error)
      this.$q.notify({
        color: 'negative',
        textColor: 'white',
        message: '載入資料失敗！',
        icon: 'fas fa-exclamation-circle',
        position: 'top',
        timeout: 2500
      })
    }
  }
}
</script>
<style scoped>
.num-title {
  font-size: 1.2rem;
}
.num {
  font-size: 2rem;
  font-weight: 700;
  color: #b60005;
}
.num span {
  font-size: 1.5rem;
}

.mid-title {
  font-size: 1.5rem;
}
.mid-text {
  font-size: 1.1rem;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: radial-gradient(rgba(0, 0, 0, 0.3)50%, rgba(0, 0, 0, 0.3)100%);
}
.para-box {
  width: 100%;
}
.para-title {
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}
.para-text {
  font-size: 1rem;
  text-indent: 2rem;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}
@media (min-width: 576px) {
  .num-title {
    font-size: 1.1rem;
  }
  .num {
    font-size: 1.5rem;
    padding-top: 10px;
  }
  .num span {
    font-size: 1.2rem;
  }
  .mid-title {
    font-size: 1.6rem;
  }
  .mid-text {
    font-size: 1.3rem;
  }
  .para-box {
    width: 90%;
  }
  .para-title {
    font-size: 1.6rem;
  }
  .para-text {
    font-size: 1.1rem;
  }
}
@media (min-width: 768px) {
  .num-title {
    font-size: 1.2rem;
  }
  .num {
    font-size: 1.6rem;
  }
  .num span {
    font-size: 1.5rem;
  }
  .para-box {
    width: 75%;
  }
  .para-title {
    font-size: 2rem;
  }
}
@media (min-width: 992px) {
  .num-title {
    font-size: 1.3rem;
    margin-bottom: 3px;
  }
  .num {
    padding-top: 0;
  }
  .num span {
    font-size: 1.8rem;
  }
  .para-box {
    width: 50%;
  }
  .para-title {
    font-size: 2.2rem;
  }
  .para-text {
    font-size: 1.3rem;
  }
}
</style>
