<template lang="pug">
  v-app-bar(
    :clipped-left="clipped"
    fixed
    app
    color="black"
    dark
  )
    v-toolbar-title(class="font-weight-bold") 神戸プログラミングアカデミー
    v-spacer
    v-menu(
      left
      bottom
    )
      template(v-slot:activator="{ on }")
        v-btn(icon v-on="on")
          v-icon() mdi-menu
      v-list
        v-list-item(
          v-for="(menu, key) in menus"
          :key="key"
          @click="onMenu(key)"
        )
          v-list-item-title() {{ menu }}
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      menus: {
        whats: '神プとは？',
        recruit: '募集要項',
        pricing: '料金',
        char: '神プの特徴',
        how: 'どうやる？',
        why: 'なぜ無料？',
        place: '場所・アクセス',
        conductor: '代表紹介'
      }
    }
  },
  methods: {
    onMenu (key) {
      this.$emit('onMenu', key)
    }
  }
}
</script>
<style></style>
