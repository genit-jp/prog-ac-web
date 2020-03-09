<template lang="pug">
  v-col(cols="12")
    h2.font-weight-bold.display-1(
      class="text-center"
    ) {{ src }}
</template>
<script>
export default {
  props: {
    src: { type: String, default: '' }
  }
}
</script>
<style></style>
