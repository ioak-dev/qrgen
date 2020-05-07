<template>
  <div className="markdown-body">
    <div v-html="htmlContent" />
  </div>
</template>
<script>
import showdown from 'showdown';
const converter = new showdown.Converter({ tables: true });
export default {
  name: 'OakShowdown',
  props: {
    source: String,
  },
  computed: {
    htmlContent: function() {
      return converter.makeHtml(this.source);
    },
  },
};
</script>
<style lang="scss" scoped>
@import './styles/Showdown.scss';
</style>
