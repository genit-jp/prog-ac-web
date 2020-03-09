<template lang="pug">
  v-col(
    cols="12"
  )
    div.mx-auto(
      style="max-width:800px;"
    )
      p(v-if="text").text-left(v-html="text")
      v-img(v-if="image" :src="image" width="100%" max-width="400" style="margin:auto;")
      slot
</template>
<script>
export default {
  props: {
    text: { type: String, default: '' },
    image: { type: String, default: '' }
  },
  computed: {
  }
}
</script>
<style></style>
