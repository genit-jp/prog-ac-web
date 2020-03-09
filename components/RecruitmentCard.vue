<template lang="pug">
  v-col(
    cols="12"
  )
    v-card(
      class="mx-auto"
      elevation="0"
      max-width="800"
    )
      v-card-title
        h3.headline.font-weight-bold.red--text.text--darken-2(
        ) {{title}}
      v-card-text
        p.text-left.font-weight-bold(
          style="font-family:Noto Sans JP !important;"
        ) {{message}}
        ul
          li(
            v-for="req in requirements"
          ) {{req}}
        span.caption(
          style="font-family:Noto Sans JP !important;"
        ) {{description}}

</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    image: { type: String, default: '' },
    description: { type: String, default: '' },
    requirements: { type: Array, default: () => { return [] } }
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
