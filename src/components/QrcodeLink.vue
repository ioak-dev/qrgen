<template>
  <div class="qrcode-link">
    <div class="title">{{ item.title }}</div>
    <div class="description">{{ item.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'QrcodeLink',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.qrcode-link {
  padding: 10px;
  margin: 10px;
  border: 1px solid var(--color-primary);
}
</style>
