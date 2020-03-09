<template lang="pug">
  v-row(
    :class="color"
    style="margin:0;"
  )
    v-container(
      style="padding:1.5em;"
    )
      v-layout(
        column
        justify-center
      )
        v-row(
          align="center"
          justify="center"
        )
          slot
</template>
<script>
export default {
  props: {
    color: { type: String, default: '' }
  }
}
</script>
<style></style>
