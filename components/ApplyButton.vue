<template lang="pug">
  v-row.text-center(
    style="margin:2em 0;"
    align="center"
    justify="center"
  )
    v-col(cols="12")
      v-btn.white--text.font-weight-bold.display-1.mx-auto(
        color="green"
        x-large
        @click="onClickApply"
      ) 応募する
    v-col(cols="12")
      h3 説明会・イベント情報
      v-simple-table(
        fixed-header
        max-width="800"
        height="300px"
        class="text-left"
        style="font-family:Noto Sans JP !important;")
        template(v-slot:default)
          thead
            tr
              th() 日時
              th() 説明会・イベント
          tbody
            tr(
              v-for="event in events"
              :key="event.event_id"
              :class="event.yet ? 'black--text' : 'grey--text'"
              @click="onClickEvent(event.event_url)"
              style="cursor: pointer"
            )
              td(
              ) {{ `${event.date.getMonth() + 1}/${event.date.getDate()} ${event.date.getHours()}:${('00' + event.date.getMinutes()).slice(-2)}〜` }}
              td(
                :class="event.yet ? 'blue--text' : ''"
                style="text-decoration: underline"
              ) {{ (event.yet ? '' : '終了：') + event.title }}
</template>

<script>
export default {
  props: {
    events: {}
  },
  computed: {
  },
  methods: {
    onClickApply () {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSf16oI34Bakvxkbo6iIaPiTxR7S554-0Za57q20kvkiz9c_MQ/viewform?usp=sf_link', '_blank')
    },
    onClickEvent (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
</style>
