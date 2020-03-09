<template lang="pug">
  v-col(
    cols="12"
    sm="4"
  )
    v-card(
      class="mx-auto"
      outlined
      min-height="320"
    )
      v-img.column-image.black--text.align-end(
        v-if="image"
        max-height="200"
        :src="image")
        v-card-title.text-center.white--text.headline.title-stroke.font-weight-black(
          style="font-family:Noto Sans JP !important;"
        ) {{title}}
      v-card-title.headline.font-weight-bold(
        v-else
      ) {{title}}
      v-card-text(
      ) {{description}}
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    description: { type: String, default: '' }
  },
  computed: {
  },
  methods: {
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
  -webkit-text-stroke: 1px #000;
  text-stroke: 1px #000;
}
</style>
