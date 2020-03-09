<template lang="pug">
    v-layout(
      column
      justify-center
      align-center
      :class="bgColor"
    )
      v-container(
      )

        v-layout(
          column
          justify-center
          align-center
        )
          h2._title.font-weight-bold.display-1.text-center() 募集要項
          h3._subtitle.headline.font-weight-bold.orange--text.text-center() 対象者
          ul.font-weight-regular.black--text.text-left.body-1
            li 18歳〜30代前半までの方
            li 週に４日以上、平日の昼間または夜に通える方
            li 受講時にノートPCを持参できる方
          h3._subtitle.headline.font-weight-bold.orange--text.text-center() 料金
          ul.font-weight-regular.black--text.text-left.body-1
            li 受講料は無料です
            li 利用するコワーキングスペースの利用料金が必要です。
              p.caption ¥5,000＋税/月(学生は半額）詳しくはこちら
          h3._subtitle.headline.font-weight-bold.orange--text.text-center() 応募方法
          ul.font-weight-regular.black--text.text-left.body-1
            li 申し込みフォームに必要事項を記載し応募してください。
            li メールにて書類選考の結果をお知らせします。合格者の方は面接のご案内をいたします。
            li 面接後、合否の結果をメールでご連絡します。
          h3._subtitle.headline.font-weight-bold.orange--text.text-center() 実施場所・アクセス
          ul.font-weight-regular.black--text.text-left.body-1
            li 起業プラザひょうご
              p 〒651-0096 兵庫県神戸市中央区雲井通5丁目3−1 サンパル6F
          iframe(
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.380264054546!2d135.19497961494878!3d34.695587591000255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008eefeb9dc46d%3A0xa47bca4f80847e8e!2z6LW35qWt44OX44Op44K244Gy44KH44GG44GU!5e0!3m2!1sja!2sjp!4v1576993314570!5m2!1sja!2sjp"
            :width="$vuetify.breakpoint.smAndDown ? '100%' : '800'" height="500" frameborder="0" style="border:0;" allowfullscreen=""
          )
</template>

<script>
export default {
  props: {
    dark: { type: Boolean, default: false },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    beforeDescription: { type: String, default: '' },
    afterDescription: { type: String, default: '' },
    image: { type: String, default: '' },
    columns: { type: Array, default () { return [] } }
  },
  computed: {
    bgColor () {
      return this.dark ? 'yellow lighten-4' : 'white'
    }
  },
  methods: {
    onClick () {
      this.$emit('onAppClick', this.storeUrl)
    }
  }
}
</script>

<style scoped>
._title {
  line-height: 2.5rem;
  margin: 2rem 0;
}
._subtitle {
  margin: 1rem 0;
  padding: 0 55px;
}
._description {
  padding: 16px;
}
.white-space {
  white-space: pre-wrap;
  text-align: center;
}
.white-space-XS {
  white-space: normal;
  text-align: left;
}
.column-image {
  margin: auto;
}
.title-stroke {
  -webkit-text-stroke: 1px #333;
  text-stroke: 1px #333;
}
</style>
