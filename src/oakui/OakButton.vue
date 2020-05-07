<template>
  <button class="oak-button" :class="style" @click="$emit('click')">
    <div class="button-label-container">
      <OakIcon v-if="icon" v-bind:mat="icon" size="1.2em" />
      <OakIcon v-if="mat" v-bind:mat="mat" size="1.2em" />
      <OakIcon v-if="fa" v-bind:fa="fa" size="1.2em" />
      <OakIcon v-if="svg" v-bind:svg="svg" size="1.2em" />
      {{ label }}
    </div>
  </button>
</template>
<script>
import OakIcon from './OakIcon.vue';
export default {
  name: 'OakButton',
  components: { OakIcon },
  props: {
    label: String,
    icon: String,
    mat: String,
    svg: String,
    fa: String,
    action: Object,
    variant: String,
    theme: String,
    align: String,
    small: Boolean,
    invert: Boolean,
  },
  data() {
    return {
      style: this.getStyle(),
    };
  },
  methods: {
    getStyle() {
      let style = this.theme ? this.theme : '';
      style += this.variant ? ` ${this.variant}` : '';

      if (!this.label) {
        style += ' icon';
      }

      style += this.invert ? ' invert' : '';

      style += this.small ? ' small' : '';

      style += this.align ? ` align-${this.align}` : '';

      return style;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/oak-button-slide.scss';
</style>
