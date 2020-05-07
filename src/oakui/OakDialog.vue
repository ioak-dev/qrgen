<template>
  <div class="oak-dialog">
    <div
      v-if="nodeVisible"
      class="dialog"
      :class="visible ? 'show ' + style : 'hide ' + style"
    >
      <div :class="visible ? 'container' : 'container hidetext'">
        <div class="dialog-header">
          <div class="container" @click="$emit('close')">
            <i class="material-icons">close</i>
            <div class="text-esc">
              esc
            </div>
          </div>
        </div>
        <div v-if="$slots['dialog-container']" class="dialog-container">
          <slot name="dialog-container" />
        </div>
        <div v-if="$slots['dialog-body']" class="dialog-body">
          <slot name="dialog-body" />
        </div>
        <div v-if="$slots['dialog-footer']" class="dialog-footer">
          <slot name="dialog-footer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OakDialog',
  props: {
    visible: Boolean,
    small: Boolean,
    fullscreen: Boolean,
  },
  data() {
    return {
      style: this.getStyle(),
      nodeVisible: false,
    };
  },
  mounted() {
    document.addEventListener('keydown', this.escFunction, false);
  },
  methods: {
    getStyle() {
      let style = '';
      style += this.small ? ' small' : '';
      style += this.fullscreen ? ' fullscreen' : '';
      return style;
    },
    escFunction(event) {
      if (event.keyCode === 27) {
        if (this.visible) {
          this.$emit('close');
        }
      }
    },
  },
  watch: {
    visible: function(newValue, oldValue) {
      if (newValue != oldValue) {
        if (newValue) {
          this.nodeVisible = newValue;
        } else {
          setTimeout(() => (this.nodeVisible = newValue), 200);
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/OakDialog.scss';
</style>
