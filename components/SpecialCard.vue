<template lang="pug">
  v-col(
    cols="12"
  )
    v-card(
      class="mx-auto"
      max-width="800"
    )
      v-container()
        v-row()
          v-col(
            cols="12"
            sm="4"
            md="3"
          )
            v-img(
              contain
              :src="image"
            )
          v-col(
            cols="12"
            sm="8"
            md="9"
          )
            v-card-title.headline.font-weight-bold.black--text.text-center(
              color=""
            ) {{title}}
            v-card-text.text-left(
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
