<template lang="pug">
  v-col(
    cols="12"
    md="4"
    sm="3"
  )
    v-badge(
      :value="true"
      content="1"
      left
      large
      overlap
    )
      v-card(
        class="mx-auto"
      )
        v-card-title.subtitle-1.font-weight-bold.black--text.text-left(
          color=""
        ) {{title}}
        v-card-text.text-left(
          :class="white-space-XS"
        ) {{description}}
</template>

<script>
export default {
  props: {
    number: { type: Number, default: 0 },
    title: { type: String, default: '' },
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
