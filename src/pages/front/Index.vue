<template>
  <div id="frontPage" class="container-fluid">
    <div class="row">
      <q-carousel
        animated
        v-model="slide"
        navigation
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
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    </div>
    <div class="row countupBoxes text-center">
      <div class="col-6 col-md-3 q-pa-md column justify-center items-center bg-amber" style="height: 120px;">
        <div class="col text-h6">環境教育</div>
        <div class="col text-h4">{{ value.num1 }}<span> 人</span></div>
      </div>
      <div class="col-6 col-md-3 q-pa-md column justify-center items-center bg-amber-10" style="height: 120px;">
        <div class="col text-h6">深度體驗</div>
        <div class="col text-h4">{{ value.num2 }}<span> 人</span></div>
      </div>
      <div class="col-6 col-md-3 q-pa-md column justify-center items-center bg-amber-2" style="height: 120px;">
        <div class="col text-h6">淨灘人數</div>
        <div class="col text-h4">{{ value.num3 }}<span> 人</span></div>
      </div>
      <div class="col-6 col-md-3 q-pa-md column justify-center items-center bg-amber-7" style="height: 120px;">
        <div class="col text-h6">農廢棄再生</div>
        <div class="col text-h4">{{ value.num4 }}<span> 公斤</span></div>
      </div>
    </div>
    <div class="column q-my-md q-pa-md text-center" style="height: 200px">
      <div class="col row justify-center items-end text-h5"><strong>林邊光采濕地農圃</strong></div>
      <div class="col row justify-center items-start q-pt-md text-h6">帶給你最有價值的屏東深度旅遊！</div>
    </div>
    <div class="column">
      <div class="col">
        <q-parallax
          :height="250"
          :speed="0.3"
          src="https://picsum.photos/1024/768/?random=1"
        >
          <div class="columm q-pa-xl">
            <div class="col q-mb-md text-center text-white text-h4"><strong>光電板下的循環魔法</strong></div>
            <div class="col q-mx-auto text-white">
              帶您親自走入光電板叢林下的萬千世界，
              看看這塊披著一層薄鹽的土地，能變出什麼魔法。
            </div>
          </div>
        </q-parallax>
      </div>
      <div class="col">
        <q-parallax
          :height="250"
          :speed="0.3"
          src="https://picsum.photos/1024/768/?random=2"
        >
          <div class="columm q-pa-xl">
            <div class="col q-mb-md text-center text-white text-h4"><strong>蟹蟹您來月芽灣</strong></div>
            <div class="col q-mx-auto text-white">
              邀請您前往美麗的月芽灣，來場與陽光浪花賽跑的古早體驗。
              幸運的話，還可以認識到全世界跑最快的沙蟹喔！
            </div>
          </div>
        </q-parallax>
      </div>
      <div class="col">
        <q-parallax
          :height="250"
          :speed="0.3"
          src="https://picsum.photos/1024/768/?random=3"
        >
          <div class="columm q-pa-xl">
            <div class="col q-mb-md text-center text-white text-h4"><strong>林邊鴨蛋玩泥巴</strong></div>
            <div class="col q-mx-auto text-white">
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
export default {
  name: 'frontPage',
  data () {
    return {
      slide: 1,
      autoplay: true,
      value: {
        num1: 100,
        num2: 100,
        num3: 100,
        num4: 100
      }
    }
  },
  methods: {

  }
}
</script>
