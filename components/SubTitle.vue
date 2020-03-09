<template lang="pug">
  v-col(cols="12")
    h3.headline.font-weight-bold(
      :class="color ? color : 'indigo--text text--darken-2'"
      class="text-center"
    ) {{ src }}
</template>
<script>
export default {
  props: {
    src: { type: String, default: '' },
    color: { type: String, default: '' }
  }
}
</script>
<style></style>
