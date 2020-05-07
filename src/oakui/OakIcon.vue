<template>
  <div class="oak-icon">
    <i
      v-if="mat"
      class="material-icons"
      :style="{ ...primaryStyle, ...dimension }"
    >
      {{ mat }}
    </i>
    <i
      v-if="fa"
      class="fontawesome-icons"
      :class="fa"
      :style="{ ...primaryStyle, ...dimension }"
    />
    <EpicIcon
      v-if="svg === 'epic'"
      :primaryStyle="primaryStyle"
      :accentStyle="accent ? accentStyle : {}"
      :dimension="dimension"
    />
    <IoakIcon
      v-if="svg === 'ioak'"
      :primaryStyle="primaryStyle"
      :accentStyle="accent ? accentStyle : {}"
      :dimension="dimension"
    />
  </div>
</template>
<script>
import EpicIcon from './icons/EpicIcon.vue';
import IoakIcon from './icons/IoakIcon.vue';
export default {
  name: 'OakIcon',
  components: { EpicIcon, IoakIcon },
  props: {
    mat: String,
    svg: String,
    fa: String,
    size: String,
    color: String,
    accent: String,
  },
  computed: {
    dimension: function() {
      const dimension = {};
      dimension.fontSize = this.size ? this.size : '24px';
      dimension.height = this.size ? this.size : '24px';
      dimension.width = 'auto';
      return dimension;
    },
    primaryStyle: function() {
      return this.getStyle(this.color);
    },
    accentStyle: function() {
      return this.getStyle(this.accent);
    },
  },
  methods: {
    getStyle: function(colorVar) {
      const style = {};
      let chosenColor = '';
      switch (colorVar) {
        case 'primary':
          chosenColor = 'var(--color-primary-1)';
          break;
        case 'secondary':
          chosenColor = 'var(--color-secondary-1)';
          break;
        case 'tertiary':
          chosenColor = 'var(--color-tertiary-1)';
          break;
        case 'success':
          chosenColor = 'var(--color-success)';
          break;
        case 'failure':
          chosenColor = 'var(--color-failure)';
          break;
        case 'warning':
          chosenColor = 'var(--color-warning)';
          break;
        default:
          chosenColor = colorVar || 'var(--color-foreground-1)';
      }
      style.fill = chosenColor;
      style.color = chosenColor;
      style.stroke = chosenColor;
      return style;
    },
  },
};
</script>
<style lang="scss" scoped>
@import './styles/oak-icon.scss';
</style>
